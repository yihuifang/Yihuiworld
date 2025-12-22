import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface SkeletonImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  aspectRatio?: string; // e.g., "16/9", "4/3", "1/1"
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  skeleton?: 'shimmer' | 'pulse' | 'none'; // Type of skeleton animation
  fadeInDuration?: number; // Duration of fade-in animation in seconds
  onLoad?: () => void;
  onError?: () => void;
  priority?: boolean; // Skip lazy loading for critical images
  threshold?: number; // IntersectionObserver threshold (0-1)
}

export function SkeletonImage({
  src,
  alt,
  className = '',
  style,
  aspectRatio,
  objectFit = 'cover',
  skeleton = 'shimmer',
  fadeInDuration = 0.4,
  onLoad,
  onError,
  priority = false,
  threshold = 0.1,
}: SkeletonImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isInView, setIsInView] = useState(priority); // If priority, start loading immediately
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return; // Skip lazy loading for priority images

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: threshold,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority, threshold]);

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  // Handle image error
  const handleError = () => {
    setIsError(true);
    onError?.();
  };

  // Skeleton animation variants
  const skeletonVariants = {
    shimmer: 'animate-shimmer',
    pulse: 'animate-pulse',
    none: '',
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio: aspectRatio,
        ...style,
      }}
    >
      {/* Skeleton Placeholder */}
      {!isLoaded && !isError && (
        <div className={`absolute inset-0 bg-white/5 ${skeletonVariants[skeleton]}`}>
          {skeleton === 'shimmer' && (
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
          )}
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/5 text-white/40">
          <svg
            className="w-12 h-12 mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-sm font-['Nunito_Sans']">Failed to load image</span>
        </div>
      )}

      {/* Actual Image */}
      {isInView && (
        <motion.img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`w-full h-full`}
          style={{
            objectFit: objectFit,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: fadeInDuration, ease: 'easeOut' }}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
        />
      )}
    </div>
  );
}

// Preset variants for common use cases
export function HeroImage(props: Omit<SkeletonImageProps, 'priority'>) {
  return (
    <SkeletonImage
      {...props}
      aspectRatio={props.aspectRatio || "16/9"} // Allow custom aspect ratio, default to 16/9
      objectFit={props.objectFit || "cover"} // Use cover by default
      priority={true}
      skeleton="shimmer"
    />
  );
}

export function ProjectCardImage(props: Omit<SkeletonImageProps, 'aspectRatio' | 'objectFit'>) {
  return (
    <SkeletonImage
      {...props}
      aspectRatio="16/10"
      objectFit="cover"
      skeleton="shimmer"
    />
  );
}

export function AvatarImage(props: Omit<SkeletonImageProps, 'skeleton'>) {
  return (
    <SkeletonImage
      {...props}
      skeleton="pulse"
    />
  );
}

export function GifImage(props: Omit<SkeletonImageProps, 'skeleton'>) {
  return (
    <SkeletonImage
      {...props}
      skeleton="shimmer"
      fadeInDuration={0.6}
    />
  );
}