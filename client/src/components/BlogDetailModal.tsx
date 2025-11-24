import { X, Calendar, Clock, User, Tag } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BlogPost } from "@/data/blog";

interface BlogDetailModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function BlogDetailModal({ post, isOpen, onClose }: BlogDetailModalProps) {
  if (!post) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Economics: "bg-blue-100 text-blue-800",
      AI: "bg-purple-100 text-purple-800",
      Research: "bg-green-100 text-green-800",
      Technology: "bg-orange-100 text-orange-800",
    };
    return colors[category] || "bg-slate-100 text-slate-800";
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-900">{post.title}</DialogTitle>
        </DialogHeader>

        {/* Category and Meta */}
        <div className="space-y-4 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
              {post.category}
            </span>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none text-slate-700 space-y-4">
          {post.content.split("\n\n").map((paragraph, idx) => {
            if (paragraph.startsWith("##")) {
              return (
                <h2 key={idx} className="text-lg font-semibold text-slate-900 mt-6 mb-3">
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("###")) {
              return (
                <h3 key={idx} className="text-base font-semibold text-slate-800 mt-4 mb-2">
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }
            if (paragraph.startsWith("- ")) {
              return (
                <ul key={idx} className="list-disc list-inside space-y-1 text-slate-700">
                  {paragraph.split("\n").map((item, itemIdx) => (
                    <li key={itemIdx} className="ml-2">
                      {item.replace("- ", "")}
                    </li>
                  ))}
                </ul>
              );
            }
            if (paragraph.startsWith("1. ")) {
              return (
                <ol key={idx} className="list-decimal list-inside space-y-1 text-slate-700">
                  {paragraph.split("\n").map((item, itemIdx) => (
                    <li key={itemIdx} className="ml-2">
                      {item.replace(/^\d+\.\s/, "")}
                    </li>
                  ))}
                </ol>
              );
            }
            return (
              <p key={idx} className="text-slate-700 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Tags */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
