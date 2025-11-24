import { Calendar, Clock, Tag } from "lucide-react";
import { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
  onClick: (post: BlogPost) => void;
}

export default function BlogCard({ post, onClick }: BlogCardProps) {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Economics: "bg-blue-100 text-blue-800",
      AI: "bg-purple-100 text-purple-800",
      Research: "bg-green-100 text-green-800",
      Technology: "bg-orange-100 text-orange-800",
    };
    return colors[category] || "bg-slate-100 text-slate-800";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <button
      onClick={() => onClick(post)}
      className="group p-6 bg-white rounded-lg border border-slate-200 hover:border-rose-300 hover:shadow-lg transition text-left cursor-pointer w-full flex flex-col h-full"
    >
      {/* Category Badge */}
      <div className="mb-4">
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
          {post.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-rose-600 transition line-clamp-2">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-slate-600 text-sm mb-4 flex-grow line-clamp-3">{post.excerpt}</p>

      {/* Meta Information */}
      <div className="space-y-3 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1 text-xs text-slate-500">
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
          {post.tags.length > 2 && <span className="text-xs text-slate-400">+{post.tags.length - 2} more</span>}
        </div>
      </div>
    </button>
  );
}
