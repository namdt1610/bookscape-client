import React, { useState } from 'react'
import { Button, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'

interface SearchSectionProps {
    onSearch: (value: string) => void
}

const SearchSection: React.FC<SearchSectionProps> = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('')

    const handleSearch = () => {
        onSearch(searchValue)
    }

    return (
        <motion.div 
            className="w-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
        >
            <div className="flex space-x-2">
                <Input
                    className="glass-input text-lg py-2 px-4 flex-grow"
                    placeholder="Search for books, authors, genres..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onPressEnter={handleSearch}
                    size="large"
                    suffix={<SearchOutlined className="text-gray-400" />}
                />
                <Button 
                    className="glass-button text-white font-medium" 
                    size="large" 
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </div>
        </motion.div>
    )
}

export default SearchSection