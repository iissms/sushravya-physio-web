
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "5 Simple Exercises to Relieve Back Pain at Home",
    excerpt: "Learn effective exercises you can do at home to alleviate back pain and improve your posture.",
    date: "2024-01-15",
    author: "Dr. Sushravya",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Importance of Posture in Modern Work Life",
    excerpt: "Discover how poor posture affects your health and learn practical tips to maintain good posture while working.",
    date: "2024-01-10",
    author: "Dr. Sushravya",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Sports Injury Prevention: A Complete Guide",
    excerpt: "Essential tips and techniques to prevent common sports injuries and maintain peak athletic performance.",
    date: "2024-01-05",
    author: "Dr. Sushravya",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    readTime: "10 min read"
  }
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <Navbar />
      
      <main className="pt-20 pb-10">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-12">
            <Button
              onClick={() => navigate('/')}
              variant="ghost"
              className="mb-6 text-[#004F71] hover:text-[#8EC9DC]"
            >
              <ArrowLeft className="mr-2" size={18} />
              Back to Home
            </Button>
            
            <h1 className="text-4xl font-bold text-[#004F71] mb-4">
              Health Tips & Blog
            </h1>
            <p className="text-lg text-[#1C1C1C] max-w-2xl">
              Expert insights, health tips, and the latest in physiotherapy to help you maintain optimal wellness.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:scale-105 transition-all duration-300 hover:shadow-xl border-0 shadow-lg overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex items-center text-sm text-[#8EC9DC] mb-2">
                    <Calendar size={14} className="mr-2" />
                    {new Date(post.date).toLocaleDateString()}
                    <span className="mx-2">•</span>
                    {post.readTime}
                  </div>
                  
                  <CardTitle className="text-xl text-[#004F71] hover:text-[#8EC9DC] transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-[#1C1C1C] mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-[#1C1C1C]">
                      <User size={14} className="mr-2 text-[#8EC9DC]" />
                      {post.author}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-[#004F71] hover:text-[#8EC9DC] p-0"
                    >
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <Card className="mt-16 bg-gradient-to-br from-[#004F71] to-[#8EC9DC] text-white border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Stay Updated with Health Tips
              </h2>
              <p className="mb-6 opacity-90">
                Subscribe to receive the latest physiotherapy tips and health insights directly to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md text-[#1C1C1C] focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button 
                  className="bg-white text-[#004F71] hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
