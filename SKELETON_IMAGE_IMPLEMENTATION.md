# SkeletonImage Component

## 功能特性

✨ **已实现的图片懒加载占位符系统**

### 核心功能
1. **懒加载 (Lazy Loading)** - 使用 IntersectionObserver，图片进入视口前50px时才开始加载
2. **骨架屏动画 (Skeleton Loading)** - 提供 shimmer（流光）和 pulse（脉冲）两种加载动画
3. **淡入动画 (Fade In)** - 图片加载完成后平滑淡入显示
4. **错误处理** - 加载失败时显示友好的错误提示
5. **优先加载** - 支持 priority 参数跳过懒加载，用于首屏关键图片

### 使用方式

#### 1. 基础组件
```tsx
import { SkeletonImage } from './components/SkeletonImage';

<SkeletonImage
  src="https://example.com/image.jpg"
  alt="Image description"
  className="w-full h-auto"
  objectFit="cover"
  skeleton="shimmer" // 'shimmer' | 'pulse' | 'none'
  fadeInDuration={0.4} // 淡入动画时长（秒）
  priority={false} // 是否优先加载
  threshold={0.1} // IntersectionObserver阈值
/>
```

#### 2. 预设变体（推荐）

**Hero 图片（首屏大图）**
```tsx
import { HeroImage } from './components/SkeletonImage';

<HeroImage
  src={project.heroImage}
  alt={project.title}
  className="w-full"
/>
// 特点：priority=true, aspectRatio="16/9", shimmer动画
```

**项目卡片图片**
```tsx
import { ProjectCardImage } from './components/SkeletonImage';

<ProjectCardImage
  src={project.image}
  alt={project.title}
  className="w-full h-full"
/>
// 特点：aspectRatio="16/10", cover模式, shimmer动画
```

**头像图片**
```tsx
import { AvatarImage } from './components/SkeletonImage';

<AvatarImage
  src={user.avatar}
  alt={user.name}
  className="w-16 h-16"
/>
// 特点：aspectRatio="1/1", cover模式, pulse动画
```

**GIF 动图**
```tsx
import { GifImage } from './components/SkeletonImage';

<GifImage
  src="https://example.com/animation.gif"
  alt="Animation"
  className="h-[640px] w-auto"
  objectFit="contain"
/>
// 特点：shimmer动画, fadeInDuration=0.6
```

### 已应用位置

✅ **ProjectDetailPage.tsx**
- Hero 图片（使用 HeroImage）
- 所有 GIF 动图（使用 GifImage，共6处）
- 静态 PNG 图片（使用 SkeletonImage，共3处）
- Next Project 图片（使用 SkeletonImage）

✅ **WorkPage.tsx**
- 项目卡片图片（使用 ProjectCardImage）

✅ **AboutPage.tsx**
- 个人头像（使用 AvatarImage）
- 公司 Logo（使用 SkeletonImage，共4处）

### 性能优化

1. **减少首屏加载** - 只加载视口内的图片
2. **预加载关键图片** - Hero 图片使用 priority 立即加载
3. **平滑过渡** - Motion 动画提供专业的视觉体验
4. **错误容错** - 网络问题时显示友好提示而不是破图

### 骨架屏动画

**Shimmer（流光效果）**
- 半透明白色光带从左向右扫过
- 适合大面积图片
- 2秒循环动画

**Pulse（脉冲效果）**
- 整体透明度周期性变化
- 适合小尺寸图片（如头像）
- Tailwind 内置动画

### 技术实现

- **IntersectionObserver** - 监听元素进入视口
- **Motion/React** - 淡入动画
- **CSS Keyframes** - Shimmer 动画
- **React Hooks** - useState, useEffect, useRef
- **TypeScript** - 完整类型定义

### 浏览器兼容性

- ✅ Chrome/Edge (支持 IntersectionObserver)
- ✅ Firefox (支持 IntersectionObserver)
- ✅ Safari (支持 IntersectionObserver)
- ⚠️ IE11 (需要 polyfill)

### 下一步优化建议

1. **响应式图片** - 添加 srcset 支持不同分辨率
2. **图片灯箱** - 点击放大查看
3. **进度指示** - 显示加载百分比
4. **WebP 检测** - 自动使用更优格式
5. **缓存策略** - 利用浏览器缓存优化重复加载
