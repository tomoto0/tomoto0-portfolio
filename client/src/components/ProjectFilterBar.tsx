import { Search, X } from "lucide-react";
import { useState, useMemo } from "react";

interface ProjectFilterBarProps {
  languages: string[];
  onFilterChange: (filters: { keyword: string; languages: string[] }) => void;
}

export default function ProjectFilterBar({ languages, onFilterChange }: ProjectFilterBarProps) {
  const [keyword, setKeyword] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  // フィルタ変更時に親コンポーネントに通知
  const handleFilterChange = (newKeyword: string, newLanguages: string[]) => {
    setKeyword(newKeyword);
    setSelectedLanguages(newLanguages);
    onFilterChange({ keyword: newKeyword, languages: newLanguages });
  };

  // キーワード変更
  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newKeyword = e.target.value;
    handleFilterChange(newKeyword, selectedLanguages);
  };

  // 言語フィルタ切り替え
  const toggleLanguage = (lang: string) => {
    const newLanguages = selectedLanguages.includes(lang)
      ? selectedLanguages.filter((l) => l !== lang)
      : [...selectedLanguages, lang];
    handleFilterChange(keyword, newLanguages);
  };

  // フィルタをリセット
  const resetFilters = () => {
    handleFilterChange("", []);
  };

  const hasActiveFilters = keyword.length > 0 || selectedLanguages.length > 0;

  return (
    <div className="mb-8 space-y-4">
      {/* キーワード検索 */}
      <div className="relative">
        <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Search projects by name or description..."
          value={keyword}
          onChange={handleKeywordChange}
          className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition"
        />
      </div>

      {/* 言語フィルタ */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-900">Filter by Language</label>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => toggleLanguage(lang)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                selectedLanguages.includes(lang)
                  ? "bg-rose-500 text-white border border-rose-500"
                  : "bg-slate-100 text-slate-700 border border-slate-200 hover:border-rose-300"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* アクティブなフィルタ表示とリセットボタン */}
      {hasActiveFilters && (
        <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <span className="text-sm text-blue-900">
            {keyword && `Searching: "${keyword}"`}
            {keyword && selectedLanguages.length > 0 && " • "}
            {selectedLanguages.length > 0 && `Languages: ${selectedLanguages.join(", ")}`}
          </span>
          <button
            onClick={resetFilters}
            className="flex items-center gap-1 px-2 py-1 text-sm text-blue-600 hover:text-blue-800 transition"
          >
            <X className="w-4 h-4" />
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
