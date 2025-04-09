import React, { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'

const SearchSection = lazy(() => import('./SearchSection'))
const FeaturedBooksCarousel = lazy(() => import('./FeaturedBooksCarousel'))

const Hero = () => {
    return (
        <div className="relative min-h-[600px] overflow-hidden">
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
                        ></Suspense>
                    </motion.div>

                    {/* Right Column - Featured Books Carousel */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <Suspense
                            fallback={
                                <div className="glass-card p-6 flex items-center justify-center animate-pulse">
                                    Loading Featured Books...
                                </div>
                            }
                        >
                            <FeaturedBooksCarousel />
                        </Suspense>
                    </motion.div>
                </div>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Popular Books
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Placeholder for popular books */}
                    <div className="glass-card p-4 animate-pulse">
                        Loading Popular Books...
                    </div>
                    <div className="glass-card p-4 animate-pulse">
                        Loading Popular Books...
                    </div>
                    <div className="glass-card p-4 animate-pulse">
                        Loading Popular Books...
                    </div>
                    <div className="glass-card p-4 animate-pulse">
                        Loading Popular Books...
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
