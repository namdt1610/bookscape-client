import { lazy } from 'react'
export const Hero = lazy(() => import('./Hero/Hero'))
export const MainContent = lazy(() => import('./MainContent'))
export const SubContent = lazy(() => import('./SubContent'))
export const HeroSkeleton = lazy(() => import('./_skeletons/HeroSkeleton'))
export const MainContentSkeleton = lazy(() => import('./_skeletons/MainContentSkeleton'))
export const SubContentSkeleton = lazy(() => import('./_skeletons/SubContentSkeleton'))

