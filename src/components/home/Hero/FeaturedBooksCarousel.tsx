import React from 'react'
import { Carousel } from 'antd'
import { motion } from 'framer-motion'

// Mock data - replace with actual API calls
const featuredBooks = [
    {
        id: 1,
        title: 'The Silent Patient',
        author: 'Alex Michaelides',
        cover: '/images/book1.jpg',
        description: 'A psychological thriller about a woman who shoots her husband and then stops speaking.'
    },
    {
        id: 2,
        title: 'Where the Crawdads Sing',
        author: 'Delia Owens',
        cover: '/images/book2.jpg',
        description: 'A mystery, a love story, and a courtroom drama set in the South.'
    },
    {
        id: 3,
        title: 'Atomic Habits',
        author: 'James Clear',
        cover: '/images/book3.jpg',
        description: 'Tiny changes, remarkable results - transform your life with small habits.'
    }
]

const FeaturedBooksCarousel = () => {
    return (
        <div className="h-full">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Featured This Week</h3>
            <Carousel autoplay className="h-[320px]">
                {featuredBooks.map((book) => (
                    <div key={book.id} >
                        <div className="glass-card p-5 h-[300px] flex items-center">
                            <div className="w-1/3 pr-4">
                                <motion.div
                                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                    className="relative h-[200px] drop-shadow-lg"
                                >
                                    <div className="absolute inset-0 rounded-lg bg-cover bg-center"
                                         style={{ backgroundImage: `url(${book.cover || 'https://via.placeholder.com/150x220'})` }}>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
                                </motion.div>
                            </div>
                            <div className="w-2/3">
                                <h4 className="text-xl font-bold mb-2">{book.title}</h4>
                                <p className="text-gray-600 text-sm mb-3">by {book.author}</p>
                                <p className="text-gray-700">{book.description}</p>
                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="glass-button text-white px-4 py-2 mt-4 rounded-lg"
                                >
                                    View Details
                                </motion.button>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default FeaturedBooksCarousel