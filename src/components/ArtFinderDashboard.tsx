import React, { useState } from "react";
import {
  Search,
  TrendingUp,
  MessageCircle,
  Eye,
  Youtube,
  FileText,
  BarChart2,
  Cloud,
  ThumbsUp,
  Target,
  Award,
  Zap,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const ArtFinderDashboard = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeSource, setActiveSource] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [showTabs, setShowTabs] = useState(false);

  const handleSearch = () => {
    if(inputValue.trim() === "") return;
    setIsAnalyzing(true);
    setShowTabs(false);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowTabs(true);
    }, 25000);
  };

  const handleClick = (source: string) => {
    setActiveSource(source);
  };

  const handleClickOut = () => {
    setActiveSource(null);
  };

  const renderLinks = (source: string) => {
    const links = {
      Reddit: [
        "https://www.reddit.com/r/Meditation/comments/38w53b/best_guide_for_beginners/",
        "https://www.reddit.com/r/Meditation/comments/139z60d/meditation_tips_for_beginners/",
        "https://www.reddit.com/r/Meditation/comments/mbynf9/beginner_meditation_techniques/",
      ],
      Quora: [
        "https://www.quora.com/What-meditation-techniques-do-you-recommend-for-beginners-feeling-overwhelmed",
        "https://www.quora.com/How-do-I-meditate-being-a-beginner",
        "https://www.quora.com/What-are-some-meditation-techniques-for-beginners-that-can-be-done-in-a-short-time-less-than-ten-minutes?top_ans=353592340",
      ],
      YouTube: [
        "https://www.youtube.com/watch?v=Hzi3PDz1AWU",
        "https://www.youtube.com/watch?v=S-W1GFBJbt0",
        "https://www.youtube.com/watch?v=DZbk6HhF7GE&t=5m43"
        // "YouTube Thumbnail 4",
        // "YouTube Thumbnail 5",
      ],
      Google: [
        "https://books.google.co.in/books/about/Meditation_for_Beginners.html?id=dalmvxNH7mUC&redir_esc=y",
        "https://sites.google.com/a/freemindfulness.org/free-mindfulness",
        "https://sites.google.com/sps.org/sps-virtual-calming-site/guided-practice/meditation",
      ],
      "App Reviews": [
        "https://play.google.com/store/apps/details?id=com.subconscious.thrive",
        "https://play.google.com/store/apps/details?id=com.profil_software.android.mindses",
        "https://play.google.com/store/apps/details?id=com.lujainapp.how.to.meditate",
      ],
    };

    return (
      <div className="mt-2">
        {links[source].map((link, index) => (
          <div key={index}>
            {source === "YouTube" ? (
              // <img
              //   src={link}
              //   alt={`Thumbnail ${index + 1}`}
              //   className="h-16 w-16"
              // />
                <CardContent>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        Link {index + 1}
                    </a>
                    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> */}
                </CardContent>
            ) : (
              <a href={link} target="_blank" rel="noopener noreferrer">
                Link {index + 1}
              </a>
            )}
          </div>
        ))}
      </div>
    );
  };

  const insights = {
    painPoints: [
      { topic: "Price concerns", frequency: 75 },
      { topic: "Ease of use", frequency: 65 },
      { topic: "Integration issues", frequency: 45 },
    ],
    competitors: [
      {
        name: "Headspace",
        engagement: 88,
        growth: 12,
        sentiment: {
          positive: 78,
          neutral: 15,
          negative: 7,
        },
        topLinks: ["https://www.grizzle.io/blog/headspace", "https://www.grizzle.io/blog/headspace", "https://www.linkedin.com/pulse/headspace-content-marketing-strategy-beyond-obvious-devansh-doshi"],
      },
      {
        name: "Calm",
        engagement: 92,
        growth: 8,
        sentiment: {
          positive: 82,
          neutral: 10,
          negative: 8,
        },
        topLinks: ["https://www.linkedin.com/pulse/finding-peace-noise-how-calms-silent-ad-hfmue", "https://www.tatari.tv/insights/how-calm-used-digital-tactics-to-master-tv-brand-advertising", "https://www.altmarketingschool.com/calm-app-marketing/"],
      },
      {
        name: "Insight Timer",
        engagement: 80,
        growth: 8,
        sentiment: {
          positive: 70,
          neutral: 20,
          negative: 10,
        },
        topLinks: ["https://medium.com/insighttimer/23-million-downloads-with-a-cent-spent-on-advertising-abea7e696e76", "https://canvasbusinessmodel.com/blogs/how-it-works/insight-timer-how-it-works", "https://www.businesswire.com/news/home/20211130005014/en/Insight-Timer-Meditation-App-Builds-%E2%80%98My-Workplace%E2%80%99-For-Companies-to-Share-Wellbeing-Experiences-and-Upskill-with-Leading-Psychologists-for-Free"],
      },
    ],
    recommendations: [
      {
        type: "Hook",
        content: "Develop a series of short, guided meditation sessions specifically designed to enhance focus. Incorporate techniques such as breath awareness and visualization, and provide users with progress tracking to encourage consistency.",
        impact: "High",
      },
      {
        type: "Hook",
        content: "Create a library of 5-10 minute meditation sessions that can be easily integrated into daily routines. Promote these sessions through targeted marketing campaigns emphasizing their convenience and effectiveness for busy individuals.",
        impact: "Medium",
      },
      {
        type: "Hook",
        content: "Implement a personalized quiz that guides users to the most suitable meditation techniques based on their preferences and goals. This can simplify the selection process and enhance user satisfaction.",
        impact: "Medium",
      },
      {
        type: "CTA",
        content: "Create a campaign centered around breath awareness, including video tutorials, infographics, and live sessions. Encourage users to share their experiences on social media, fostering community engagement and increasing visibility.",
        impact: "High",
      },
      {
        type: "CTA",
        content: "Develop marketing content that addresses common emotional pain points (e.g., stress, anxiety) and showcases how meditation can provide relief. Use testimonials and success stories to create relatable narratives that resonate with potential users.",
        impact: "High",
      },
      {
        type: "CTA",
        content: "Introduce a freemium model that allows users to access basic content for free while offering premium features at a competitive price. This can attract a larger user base and convert free users into paying customers over time.",
        impact: "High",
      },
      {
        type: "Content",
        content: "Create a community platform where users can share experiences, ask questions, and support each other. Incorporate features like forums, group challenges, and live Q&A sessions with meditation experts to enhance user engagement and retention.",
        impact: "High",
      },
      {
        type: "Content",
        content: "Position your platform as the go-to resource for beginners by offering comprehensive guides, beginner courses, and community support. Highlight these features in marketing campaigns to attract new users.",
        impact: "Medium",
      }
    ],
  };
  const data = {
    labels: [
      "Difficulty focusing",
      "Lack of time",
      "Overwhelmed by options",
      "Others",
    ],
    datasets: [
      {
        label: "#Impact on % of Users",
        data: [47, 23, 19, 11],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };


  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white p-8 relative overflow-hidden backdrop-filter backdrop-blur">
      <div className="fixed top-20 left-20 w-[500px] h-[500px] opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, #3c10d9db, #3c11d77e, #311b6100 60%)',
          filter: 'blur(40px)',
          zIndex: 1000,
          animation: 'pulse 8s ease-in-out infinite'
        }}
      />
      <div className="fixed bottom-20 right-20 w-[400px] h-[400px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, #3c10d9db, #3c11d77e, #311b6100 60%)',
          filter: 'blur(30px)',
          zIndex: 1000,
          animation: 'pulse 6s ease-in-out infinite'
        }}
      />

      <div className="fixed top-1/3 right-1/3 w-3 h-64 bg-blue-400 rounded-full animate-float"
        style={{
          boxShadow: '0 0 30px #60A5FA',
          animation: 'float 10s ease-in-out infinite'
        }}
      />
      <div className="fixed bottom-1/3 left-1/4 blurry w-3 h-64 bg-purple-400 rounded-full animate-float-delayed"
        style={{
          boxShadow: '0 0 20px #A78BFA',
          animation: 'float 8s ease-in-out infinite 1s'
        }}
      />

      <div className="fixed top-0 left-1/4 w-[1px] h-32 animate-glow"
        style={{
          background: 'linear-gradient(180deg, transparent, #3c10d9, transparent)',
          animation: 'moveVertical 15s linear infinite'
        }}
      />
      <div className="fixed top-0 right-1/3 w-[1px] h-24 animate-glow"
        style={{
          background: 'linear-gradient(180deg, transparent, #3c10d9, transparent)',
          animation: 'moveVertical 12s linear infinite 2s'
        }}
      />

      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="matrix-rain" style={{ animation: 'matrixRain 20s linear infinite' }} />
      </div>

      <div className="fixed top-40 left-1/3 w-32 h-32 rounded-full border border-blue-500/20 animate-spin-slow"
        style={{
          borderWidth: '1px',
          borderStyle: 'dashed',
          animation: 'spin 20s linear infinite'
        }}
      />
      <div className="fixed bottom-40 right-1/3 w-24 h-24 rounded-full border border-purple-500/20 animate-spin-slow"
        style={{
          borderWidth: '1px',
          borderStyle: 'dashed',
          animation: 'spin 15s linear infinite reverse'
        }}
      />

      <div className="fixed top-0 left-0 w-20 h-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse-fast" />
        <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-pulse-fast" />
      </div>
      <div className="fixed bottom-0 right-0 w-20 h-20 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse-fast" />
        <div className="absolute bottom-0 right-0 w-[1px] h-full bg-gradient-to-t from-transparent via-purple-500 to-transparent animate-pulse-fast" />
      </div>

      <div className="relative ">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold mb-2 text-white hover:text-blue-400 transition-colors">
            ART Finder Dashboard
          </h1>
          <p className="text-gray-400 hover:text-gray-300 transition-colors">
            Automated Research and Trigger Analysis Tool
          </p>
        </div>

        <Card className="mb-8 bg-[#1A1A1A] border-[#2A2A2A] hover:border-blue-500/50 transition-all duration-300 animate-slide-up">
          <CardContent className="pt-6">
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                placeholder="Enter your topic or brand name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 p-3 border rounded-lg bg-[#2A2A2A] border-[#3A3A3A] text-white placeholder:text-gray-500 
                         focus:border-blue-500 focus:ring-blue-500/50 transition-all duration-300"
              />
              <button
                onClick={handleSearch}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 
                         hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]"
              >
                <Search size={20} />
                {isAnalyzing ? "Analyzing..." : "Start Research"}
              </button>
            </div>
          </CardContent>
        </Card>

        {isAnalyzing && (
        <div className="flex flex-col justify-center items-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
          <div className="">Processing...</div>
        </div>
      )}

        {showTabs && (
        <Tabs defaultValue="insights" className="space-y-4">
          <TabsList className="grid grid-cols-4 gap-4 bg-transparent animate-fade-in">
            <TabsTrigger
              value="insights"
              className="bg-[#1A1A1A] text-gray-400 border border-[#2A2A2A] 
                       data-[state=active]:bg-blue-600 data-[state=active]:text-white
                       hover:border-blue-500/50 transition-all duration-300
                       hover:shadow-[0_0_10px_rgba(37,99,235,0.3)]"
            >
              <TrendingUp className="mr-2" />
              Key Insights
            </TabsTrigger>
            <TabsTrigger
              value="sources"
              className="bg-[#1A1A1A] text-gray-400 border border-[#2A2A2A] data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              <MessageCircle className="mr-2" />
              Data Sources
            </TabsTrigger>
            <TabsTrigger
              value="competitors"
              className="bg-[#1A1A1A] text-gray-400 border border-[#2A2A2A] data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              <Eye className="mr-2" />
              Competitor Analysis
            </TabsTrigger>
            <TabsTrigger
              value="recommendations"
              className="bg-[#1A1A1A] text-gray-400 border border-[#2A2A2A] data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              <ThumbsUp className="mr-2" />
              Recommendations
            </TabsTrigger>
          </TabsList>

          <TabsContent value="insights" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-[#1A1A1A] border-[#2A2A2A] hover:border-blue-500/50 transition-all duration-300 
                             hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] animate-slide-up-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white group">
                    <Target className="text-blue-500 group-hover:rotate-180 transition-transform duration-500" />
                    <span className="group-hover:text-blue-400 transition-colors">Pain Points</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <div className="space-y-6">
                    <div className="space-y-2 hover:translate-x-2 transition-transform duration-300">
                      <div className="flex items-center justify-between">
                        <span className="font-bold">Difficulty focusing</span>
                      </div>
                      <div>
                        <span className="font-medium flex">
                          For many beginners struggle to maintain concentration during meditation, leading to frustration and abandonment of practice.
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2 hover:translate-x-2 transition-transform duration-300">
                      <div className="flex items-center justify-between">
                        <span className="font-bold">Lack of time</span>
                      </div>
                      <div>
                        <span className="font-medium flex">
                            Users often feel they cannot find time in their busy schedules to meditate, which discourages them from starting or continuing their practice.
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2 hover:translate-x-2 transition-transform duration-300">
                      <div className="flex items-center justify-between">
                        <span className="font-bold">Overwhelmed by options</span>
                      </div>
                      <div>
                        <span className="font-medium flex">
                            The variety of meditation techniques can be confusing for newcomers, leading to decision fatigue.
                        </span>
                      </div>
                    </div>
                    {/* <div className="space-y-2 hover:translate-x-2 transition-transform duration-300">
                      <div className="flex items-center justify-between">
                        <span className="font-bold">Point 1</span>
                      </div>
                      <div>
                        <span className="font-medium flex">
                          Lorem Ipsum Explaination of Point 1
                        </span>
                      </div>
                    </div> */}
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#1A1A1A] border-[#2A2A2A] hover:border-blue-500/50 transition-all duration-300 
                             hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] animate-slide-up-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white group">
                    <Target className="text-blue-500 group-hover:rotate-180 transition-transform duration-500" />
                    <span className="group-hover:text-blue-400 transition-colors">Trends Insights</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <div className="space-y-6">
                    <div className="space-y-2 hover:translate-x-2 transition-transform duration-300">
                      <div className="flex items-center justify-between">
                        <span className="font-bold">Emphasis on Meditation</span>
                      </div>
                      <div>
                        <span className="font-medium flex">
                            The strong focus on meditation across platforms indicates a growing interest in mental well-being.
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2 hover:translate-x-2 transition-transform duration-300">
                      <div className="flex items-center justify-between">
                        <span className="font-bold">Focus on Beginners</span>
                      </div>
                      <div>
                        <span className="font-medium flex">
                            There is a significant demand for beginner-friendly content and resources
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2 hover:translate-x-2 transition-transform duration-300">
                      <div className="flex items-center justify-between">
                        <span className="font-bold">Popularity of Guided Techniques</span>
                      </div>
                      <div>
                        <span className="font-medium flex">
                            Guided meditation is a popular entry point for many users.
                        </span>
                      </div>
                    </div>
                    {/* <div className="space-y-2 hover:translate-x-2 transition-transform duration-300">
                      <div className="flex items-center justify-between">
                        <span className="font-bold">Point 1</span>
                      </div>
                      <div>
                        <span className="font-medium flex">
                          Lorem Ipsum Explaination of Point 1
                        </span>
                      </div>
                    </div> */}
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#1A1A1A] border-[#2A2A2A] hover:border-blue-500/50 transition-all duration-300 
                             hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] animate-slide-up-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white group">
                    <Target className="text-blue-500 group-hover:rotate-180 transition-transform duration-500" />
                    <span className="group-hover:text-blue-400 transition-colors">Trigger Insights</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <div className="space-y-6">
                    <div className="space-y-2 hover:translate-x-2 transition-transform duration-300">
                      <div className="flex items-center justify-between">
                        <span className="font-bold">Guided Meditation</span>
                      </div>
                      <div>
                        <span className="font-medium flex">
                            The structured nature of guided meditations alleviates anxiety for beginners.
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2 hover:translate-x-2 transition-transform duration-300">
                      <div className="flex items-center justify-between">
                        <span className="font-bold">Focus on Your Breath</span>
                      </div>
                      <div>
                        <span className="font-medium flex">
                            Emphasizing breath-focused techniques resonates with users seeking simplicity.
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2 hover:translate-x-2 transition-transform duration-300">
                      <div className="flex items-center justify-between">
                        <span className="font-bold">Community Engagement</span>
                      </div>
                      <div>
                        <span className="font-medium flex">
                            Users are drawn to community-driven experiences.
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2 hover:translate-x-2 transition-transform duration-300">
                      <div className="flex items-center justify-between">
                        <span className="font-bold">Emotional Connection</span>
                      </div>
                      <div>
                        <span className="font-medium flex">
                          Emotional hooks can significantly enhance user engagement.
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-[#1A1A1A] border-[#2A2A2A] hover:border-blue-500/50 transition-all duration-300 
                             hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] animate-slide-up-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <BarChart2 className="text-blue-500" />
                    Top Pain Points
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <div className="space-y-4">
                    <Doughnut data={data} />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#1A1A1A] border-[#2A2A2A] hover:border-blue-500/50 transition-all duration-300 
                             hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] animate-slide-up-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Cloud className="text-blue-500" />
                    Trending Keywords
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <div className="p-6 bg-[#2A2A2A] shadow-lg rounded-lg border border-[#3A3A3A]">
                    <div className="flex flex-wrap justify-center gap-4">
                      {[
                        { text: "Meditation", size: 50, color: "#60A5FA" },
                        { text: "Beginners", size: 40, color: "#34D399" },
                        { text: "Techniques", size: 44, color: "#60A5FA" },
                        { text: "Mindfulness", size: 36,  color: "#A78BFA" }, 
                        { text: "Breathing", size:  38, color: "#F87171" },
                        { text: "Focus", size: 62, color: "#FBBF24" },
                        { text: "Distractions", size: 71, color: "#34D399" },
                        { text: "Relaxation", size: 30, color: "#60A5FA" },
                        { text: "Guided", size: 28, color: "#A78BFA" },
                        { text: "Others", size: 2, color: "#F87171" },
                      ].map((word, index) => (
                        <span
                          key={index}
                          className="transition-all duration-200 hover:scale-110 cursor-pointer"
                          style={{ 
                            fontSize: `${word.size}px`,
                            color: word.color,
                            textShadow: '0 0 10px rgba(0,0,0,0.5)'
                          }}
                        >
                          {word.text}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* <Card className="bg-[#1A1A1A] border-[#2A2A2A] hover:border-blue-500/50 transition-all duration-300 
                             hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] animate-slide-up-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Youtube className="text-blue-500" />
                  Top Performing Content
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-gray-100 p-4 rounded-lg">
                      <div className="w-full h-32 bg-gray-200 rounded-lg mb-2" />
                      <h3 className="font-medium">Video Title {item}</h3>
                      <p className="text-sm text-gray-600">
                        1.2M views • 2 weeks ago
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card> */}
          </TabsContent>

          <TabsContent
            value="sources"
            className="bg-[#1A1A1A] border-[#2A2A2A] text-white"
          >
            <Card>
              <CardContent className="pt-6">
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
                {["Reddit", "Quora", "YouTube", "Google", "App Reviews"].map(
                  (source, index) => (
                    <Alert
                      key={index}
                      onClick={() => handleClick(source)}
                      onMouseLeave={handleClickOut}
                      className="mt-5 bg-[#2A2A2A] border-[#3A3A3A] text-white"
                    >
                      <FileText className="h-4 w-4" />
                      <AlertDescription>
                        Data from {source} has been analyzed
                      </AlertDescription>
                      {activeSource === source && renderLinks(source)}
                    </Alert>
                  )
                )}
                {/* </div> */}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent
            value="competitors"
            className="bg-[#1A1A1A] border-[#2A2A2A] text-white"
          >
            <div className="">
              <Card className="bg-[#1A1A1A] border-[#2A2A2A] hover:border-blue-500/50 transition-all duration-300 
                             hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] animate-slide-up-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white group">
                    <Target className="text-blue-500 group-hover:rotate-180 transition-transform duration-500" />
                    <span className="group-hover:text-blue-400 transition-colors">Competitor Performance</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {insights.competitors.map((competitor, index) => (
                        <Card key={index} className="bg-[#1A1A1A] border-[#2A2A2A] hover:border-blue-500/50 transition-all duration-300 
                                    hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] animate-slide-up-1">
                            <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-white group">
                                <Target className="text-blue-500 group-hover:rotate-180 transition-transform duration-500" />
                                <span className="group-hover:text-blue-400 transition-colors">{competitor.name}</span>
                            </CardTitle>
                            </CardHeader>
                            <CardContent className="text-gray-300">
                                <div className="space-y-6 ">
                                    <div className="space-y-2 hover:translate-x-2 transition-transform duration-300">
                                        <div className="flex items-center justify-between">
                                            <span className="font-bold">Engagement Score: {competitor.engagement}%</span>
                                        </div>
                                        <div>
                                            <span className="font-medium flex">
                                                <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${competitor.engagement}%` }} />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="space-y-2 transition-transform duration-300">
                                        <div className="flex items-center justify-between">
                                            <span className="font-bold">Sentiments:</span>
                                        </div>
                                        <div>
                                            <span className="font-medium flex">
                                            <div
                                                className="bg-green-500 h-2 rounded-l-full"
                                                style={{
                                                width: `${competitor.sentiment.positive}%`,
                                                }}
                                            />
                                            <div
                                                className="bg-yellow-500 h-2"
                                                style={{
                                                width: `${competitor.sentiment.neutral}%`,
                                                }}
                                            />
                                            <div
                                                className="bg-red-500 h-2 rounded-r-full"
                                                style={{
                                                width: `${competitor.sentiment.negative}%`,
                                                }}
                                            />
                                            </span>
                                        </div>
                                        <div className="text-[15px] flex space-x-5">
                                            <span className="text-green-500">Positive</span>
                                            <span className="text-yellow-500">Neutral</span>
                                            <span className="text-red-500">Negative</span>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="font-bold">Top Content: </span>
                                        </div>
                                        {competitor.topLinks && competitor.topLinks.slice(0, 3).map((link, linkIndex) => (
                                            <div className="space-y-2 transition-transform duration-300">
                                                <span className="font-medium flex"></span>
                                                <a key={linkIndex} href={link} target="_blank" rel="noopener">
                                                    {link}
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                    </div>
                </CardContent>
              </Card>

              {/* <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="text-blue-600" />
                    Top Performing Content Types
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { type: "Video Content", percentage: 75 },
                      { type: "Blog Posts", percentage: 60 },
                      { type: "Social Media", percentage: 45 },
                    ].map((content, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between">
                          <span>{content.type}</span>
                          <span>{content.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${content.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </TabsContent>

          {/* New Recommendations Section */}
          <TabsContent
            value="recommendations"
            className="bg-[#1A1A1A] border-[#2A2A2A] text-white"
          >
            <div className="grid grid-cols-1 gap-4">
              {insights.recommendations.map((rec, index) => (
                <Card key={index} className="bg-[#1A1A1A] border-[#2A2A2A] hover:border-blue-500/50 transition-all duration-300 
                                       hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] animate-slide-up-2">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Zap className="text-blue-500 h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-lg">{rec.type}</span>
                          <span
                            className={`px-3 py-1 rounded-full text-sm ${
                              rec.impact === "High"
                                ? "bg-green-100 text-green-800"
                                : rec.impact === "Medium"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {rec.impact} Impact
                          </span>
                        </div>
                        <p className="text-gray-300">{rec.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        )}
      </div>
    </div>
  );
};

const styles = `
  @keyframes pulse {
    0% {
      transform: scale(0.95);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.8;
    }
    100% {
      transform: scale(0.95);
      opacity: 0.5;
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes moveVertical {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100vh);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes pulse-fast {
    0% {
      opacity: 0.2;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.2;
    }
  }

  @keyframes matrixRain {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }

  .animate-float-delayed {
    animation-delay: 1s;
  }

  .animate-spin-slow {
    animation-duration: 20s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .matrix-rain {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, 
      rgba(60, 16, 217, 0.3) 0%,
      rgba(60, 16, 217, 0.1) 50%,
      transparent 100%
    );
    background-size: 100% 200%;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slide-up {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .animate-fade-in {
    animation: fade-in 0.5s ease-out forwards;
  }

  .animate-slide-up {
    animation: slide-up 0.5s ease-out forwards;
  }

  .animate-slide-up-1 {
    animation: slide-up 0.5s ease-out 0.1s forwards;
    opacity: 0;
  }

  .animate-slide-up-2 {
    animation: slide-up 0.5s ease-out 0.2s forwards;
    opacity: 0;
  }

  /* Add hover animations */
  .hover-glow {
    transition: all 0.3s ease-in-out;
  }

  .hover-glow:hover {
    box-shadow: 0 0 20px rgba(37,99,235,0.3);
    transform: translateY(-2px);
  }

  /* Add group animations */
  .group:hover .group-hover\:rotate-180 {
    transform: rotate(180deg);
  }
`;

export default ArtFinderDashboard;
