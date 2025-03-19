import React, { lazy, useState, Suspense } from 'react'
import { motion } from 'framer-motion'

const SearchSection = lazy(() => import('./SearchSection'))
const FeaturedBooksCarousel = lazy(() => import('./FeaturedBooksCarousel'))
const QuickCategories = lazy(() => import('./QuickCategories'))

const Hero = () => {
    return (
        <div className="relative min-h-[600px] overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50">
            {/* Glass orbs decoration */}
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-400 opacity-20 filter blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-400 opacity-20 filter blur-3xl"></div>

            <div className="container mx-auto px-4 py-[75px] relative">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="glassmorphism space-y-8 p-7 h-[400px]"
                    >
                        <motion.h1
                            className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Find Your Next
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                Great Read
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-lg text-gray-600 max-w-md"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Discover millions of eBooks, audiobooks, and more at
                            your fingertips.
                        </motion.p>

                        <Suspense
                            fallback={
                                <div className="glass-card p-4 animate-pulse">
                                    Loading Search...
                                </div>
                            }
                        >
                            <SearchSection
                                onSearch={(value) => console.log(value)}
                            />
                        </Suspense>

                        <Suspense
                            fallback={
                                <div className="glass-card p-4 animate-pulse">
                                    Loading Categories...
                                </div>
                            }
                        >
                            <QuickCategories />
                        </Suspense>
                    </motion.div>

                    {/* Right Column - Featured Books Carousel */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="glassmorphism p-6"
                    >
                        <Suspense
                            fallback={
                                <div className="glass-card p-6 h-[300px] flex items-center justify-center animate-pulse">
                                    Loading Featured Books...
                                </div>
                            }
                        >
                            <FeaturedBooksCarousel />
                        </Suspense>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero
