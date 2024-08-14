import React, { useEffect, useState } from 'react';
import './Products.css';

const Products = () => {

    const [isFilterVisible, setFilterVisible] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('recommended');
    const [isOpen, setIsOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];
    const isButtonEnabled = selectedCategories.length > 0;
    const [sortedProducts, setSortedProducts] = useState([]);
    const [filteredAndSortedProducts, setFilteredAndSortedProducts] = useState([]);

    const toggleFilterVisibility = () => {
        setFilterVisible(prevState => !prevState);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    const handleClick = (item) => {
        setSelectedItem(item);
        setIsDropdownOpen(prevState => !prevState);
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleCategoryChange = (category) => {
        setSelectedCategories(prevCategories =>
            prevCategories.includes(category)
                ? prevCategories.filter(cat => cat !== category)
                : [...prevCategories, category]
        );
    };    

    const filteredProducts = products.filter(product =>
        selectedCategories.length === 0 || selectedCategories.includes(product.category)
    );

    const filterAndSortProducts = (products, categories, sortBy) => {
        let filteredProducts = products;
    
        if (categories.length > 0) {
            filteredProducts = products.filter(product =>
                categories.includes(product.category)
            );
        }
    
        switch (sortBy) {
            case 'A-Z':
                filteredProducts = [...filteredProducts].sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'popular':
                filteredProducts = [...filteredProducts].sort((a, b) => b.rating.rate - a.rating.rate);
                break;
            case 'Price : high to low':
                filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
                break;
            case 'Price : low to high':
                filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
                break;
            default:
                break;
        }
    
        return filteredProducts;
    };    

    useEffect(() => {
        setFilteredAndSortedProducts(filterAndSortProducts(products, selectedCategories, selectedItem));
    }, [products, selectedCategories, selectedItem]);
    
    

    return (
        <div className="products-container">
            <div>
                <div className="products-header">
                    <span className="text-title">DISCOVER OUR PRODUCTS</span>
                    <span className="text-subtitle">
                        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
                    </span>
                </div>

                <div className="filter-bar">
                    <div className="filter-info">
                        <span className="item-count">3425 ITEMS</span>
                        <div className="hide-filter" onClick={toggleFilterVisibility}>
                            <i className={`fa-solid ${isFilterVisible ? 'fa-chevron-left' : 'fa-chevron-right'}`}></i>
                            <span>{isFilterVisible ? 'HIDE FILTER' : 'SHOW FILTER'}</span>
                        </div>
                    </div>

                    <div className="filter-dropdown-container">
                        <div className="recommended recommended-text-filter">
                            <span className="recommended-text">FILTER</span>
                        </div>
                        <div className='straitline'></div>
                        <div className="recommended" onClick={toggleDropdown}>
                            <span className="recommended-text">{selectedItem}</span>
                            <i className={`fa-solid fa-chevron-${isDropdownOpen ? 'up' : 'down'}`}></i>
                        </div>
                        {isDropdownOpen && (
                            <div className="dropdown-menu">
                                {['recommended', 'A-Z', 'popular', 'Price : high to low', 'Price : low to high'].map((item) => (
                                    <div
                                        key={item}
                                        className={`dropdown-item ${selectedItem === item ? 'selected' : ''}`}
                                        onClick={() => handleClick(item)}
                                    >
                                        {selectedItem === item && <span className="check-icon">✔</span>}
                                        {item}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="customizable-section">
                    {isFilterVisible && (
                        <div className="customizable-filter">
                            <div className='customizable-box'>
                                <input type="checkbox" className="customizable-checkbox" />
                                <div className="customizable-title">CUSTOMIZABLE</div>
                            </div>

                            <div className="filter-options">
                                <div className="filter-options-header" onClick={handleToggle}>
                                    <span className="filter-options-header-text">CATEGORY</span>
                                    <i className={`filter-options-dropdown fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
                                </div>
                                <span className="filter-options-value">All</span>

                                {isOpen && (
                                    <div className="filter-options-content">

                                        <div className={`filter-options-link ${isButtonEnabled ? 'enabled' : 'disabled'}`}
                                            onClick={() => isButtonEnabled && setSelectedCategories([])}>Unselect all</div>

                                        <div className="filter-options-checkboxes">
                                            {categories.map(category => (
                                                <label key={category}>
                                                    <input
                                                        type="checkbox"
                                                        className="filter-options-checkbox"
                                                        onChange={() => handleCategoryChange(category)}
                                                        checked={selectedCategories.includes(category)}
                                                    />
                                                    {category}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    <div className="product-list">
                        {filteredAndSortedProducts.map((product, index) => (
                            <div className="product-item" key={index}>
                                <div className="product-image">
                                    <img
                                        alt='product image'
                                        src={product.image}
                                    />
                                </div>
                                <div className="product-info">
                                    <div className="product-title">{product.title}</div>
                                    <div className="product-details">
                                        <span className="product-price">${product.price}</span>
                                        <i className="product-heart fa-regular fa-heart"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;