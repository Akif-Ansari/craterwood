import React from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const BlogsPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Tips for Modular Kitchen Design",
      excerpt: "Transform your cooking space with these expert tips on layout, storage, and style that will make your kitchen both beautiful and functional.",
      author: "Michael Rodriguez",
      date: "March 15, 2024",
      category: "Design Tips",
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Sustainable Wood: Making Eco-Friendly Furniture Choices",
      excerpt: "Learn about sustainable wood options and how choosing eco-friendly materials can benefit both your home and the environment.",
      author: "Sarah Chen",
      date: "March 12, 2024",
      category: "Sustainability",
      image: "https://images.pexels.com/photos/5974074/pexels-photo-5974074.jpeg?auto=compress&cs=tinysrgb&w=400",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Maximizing Storage in Small Spaces: Smart Solutions",
      excerpt: "Discover innovative storage solutions that make the most of limited space without compromising on style or functionality.",
      author: "David Kumar",
      date: "March 10, 2024",
      category: "Space Planning",
      image: "https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=400",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "The Art of Wood Finishing: Techniques and Tips",
      excerpt: "Master the craft of wood finishing with our comprehensive guide covering different techniques, tools, and best practices.",
      author: "Michael Rodriguez",
      date: "March 8, 2024",
      category: "Craftsmanship",
      image: "https://images.pexels.com/photos/5974269/pexels-photo-5974269.jpeg?auto=compress&cs=tinysrgb&w=400",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Trending Colors and Finishes for 2024",
      excerpt: "Stay ahead of the curve with the latest trends in furniture colors, finishes, and styles that will dominate this year.",
      author: "Sarah Chen",
      date: "March 5, 2024",
      category: "Trends",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Before & After: Kitchen Transformation Stories",
      excerpt: "Get inspired by real client transformations that showcase the power of thoughtful design and quality craftsmanship.",
      author: "David Kumar",
      date: "March 3, 2024",
      category: "Case Studies",
      image: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=400",
      readTime: "10 min read"
    }
  ];

  const categories = ["All", "Design Tips", "Sustainability", "Space Planning", "Craftsmanship", "Trends", "Case Studies"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Discover expert tips, project insights, and the latest trends in furniture design and craftsmanship.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-amber-100 hover:text-amber-600 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-amber-600 transition-colors duration-300">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <span className="text-amber-600 font-medium">{post.readTime}</span>
                </div>

                {/* Read More Button */}
                <button className="flex items-center space-x-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-300 group">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white text-amber-600 border-2 border-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-md">
            Load More Articles
          </button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest furniture tips, project updates, 
            and exclusive offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
            />
            <button className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;