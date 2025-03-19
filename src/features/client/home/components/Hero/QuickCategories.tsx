import React from 'react'
import { Tag } from 'antd'
import { motion } from 'framer-motion'

const categories = [
    'Fiction', 'Mystery', 'Romance', 'Sci-Fi', 'History', 'Biography', 'Self-Help', 'Children'
]

const QuickCategories = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
        >
            <h3 className="text-sm font-medium mb-2 text-gray-500">Popular Categories</h3>
            <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.05 }}
                    >
                        <Tag 
                            className="glass-card cursor-pointer px-3 py-1.5 text-sm font-medium border-0 hover:bg-opacity-30 transition-all"
                            color="transparent"
                        >
                            {category}
                        </Tag>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default QuickCategories