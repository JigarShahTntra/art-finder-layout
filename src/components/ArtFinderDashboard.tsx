import React, { useState } from 'react';
import { Search, TrendingUp, MessageCircle, Eye, Youtube, FileText, BarChart2, Cloud, ThumbsUp, Target, Award, Zap, ArrowUp, ArrowDown } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const ArtFinderDashboard = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  const insights = {
    painPoints: [
      { topic: "Price concerns", frequency: 75 },
      { topic: "Ease of use", frequency: 65 },
      { topic: "Integration issues", frequency: 45 }
    ],
    competitors: [
      { name: "Competitor A", engagement: 82, growth: 12, sentiment: 0.8 },
      { name: "Competitor B", engagement: 67, growth: -5, sentiment: 0.6 },
      { name: "Competitor C", engagement: 58, growth: 8, sentiment: 0.7 }
    ],
    recommendations: [
      { type: "Hook", content: "Address price sensitivity with value-focused messaging", impact: "High" },
      { type: "CTA", content: "Emphasize free trial with no credit card required", impact: "High" },
      { type: "Content", content: "Create video tutorials focusing on ease of use", impact: "Medium" }
    ]
  };
  const data = {
    labels: ['Pain Point 1', 'Pain Point 2', 'Pain Point 3', 'Pain Point 4', 'Pain Point 5', 'Others'],
    datasets: [
      {
        label: '#Impact on Users',
        data: [12, 19, 3, 5, 2, 1],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const handleSearch = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Previous sections remain the same until TabsContent */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">ART Finder Dashboard</h1>
        <p className="text-gray-600">Automated Research and Trigger Analysis Tool</p>
      </div>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="Enter your topic or brand name"
              className="flex-1 p-3 border rounded-lg"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700"
            >
              <Search size={20} />
              {isAnalyzing ? 'Analyzing...' : 'Start Research'}
            </button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="insights" className="space-y-4">
        <TabsList className="grid grid-cols-4 gap-4 bg-transparent">
          <TabsTrigger value="insights" className="data-[state=active]:bg-white">
            <TrendingUp className="mr-2" />
            Key Insights
          </TabsTrigger>
          <TabsTrigger value="sources" className="data-[state=active]:bg-white">
            <MessageCircle className="mr-2" />
            Data Sources
          </TabsTrigger>
          <TabsTrigger value="competitors" className="data-[state=active]:bg-white">
            <Eye className="mr-2" />
            Competitor Analysis
          </TabsTrigger>
          <TabsTrigger value="recommendations" className="data-[state=active]:bg-white">
            <ThumbsUp className="mr-2" />
            Recommendations
          </TabsTrigger>
        </TabsList>

        <TabsContent value="insights" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                        <Target className="text-blue-600" />
                        Pain Points
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold">Point 1</span>
                                </div>
                                <div>
                                    <span className="font-medium flex">
                                    Lorem Ipsum Explaination of Point 1
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold">Point 1</span>
                                </div>
                                <div>
                                    <span className="font-medium flex">
                                    Lorem Ipsum Explaination of Point 1
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold">Point 1</span>
                                </div>
                                <div>
                                    <span className="font-medium flex">
                                    Lorem Ipsum Explaination of Point 1
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold">Point 1</span>
                                </div>
                                <div>
                                    <span className="font-medium flex">
                                    Lorem Ipsum Explaination of Point 1
                                    </span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                        <Target className="text-blue-600" />
                        Trends Insights
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold">Point 1</span>
                                </div>
                                <div>
                                    <span className="font-medium flex">
                                    Lorem Ipsum Explaination of Point 1
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold">Point 1</span>
                                </div>
                                <div>
                                    <span className="font-medium flex">
                                    Lorem Ipsum Explaination of Point 1
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold">Point 1</span>
                                </div>
                                <div>
                                    <span className="font-medium flex">
                                    Lorem Ipsum Explaination of Point 1
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold">Point 1</span>
                                </div>
                                <div>
                                    <span className="font-medium flex">
                                    Lorem Ipsum Explaination of Point 1
                                    </span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                        <Target className="text-blue-600" />
                        Trigger Insights
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold">Point 1</span>
                                </div>
                                <div>
                                    <span className="font-medium flex">
                                    Lorem Ipsum Explaination of Point 1
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold">Point 1</span>
                                </div>
                                <div>
                                    <span className="font-medium flex">
                                    Lorem Ipsum Explaination of Point 1
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold">Point 1</span>
                                </div>
                                <div>
                                    <span className="font-medium flex">
                                    Lorem Ipsum Explaination of Point 1
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold">Point 1</span>
                                </div>
                                <div>
                                    <span className="font-medium flex">
                                    Lorem Ipsum Explaination of Point 1
                                    </span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                    <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BarChart2 className="text-blue-600" />
                        Top Pain Points
                    </CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className="space-y-4">
                        <Doughnut data={data} />
                    </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Cloud className="text-blue-600" />
                        Trending Keywords
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                        {['affordable', 'reliable', 'fast', 'innovative', 'secure'].map((keyword, index) => (
                            <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                            >
                            {keyword}
                            </span>
                        ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Youtube className="text-blue-600" />
                    Top Performing Content
                </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-gray-100 p-4 rounded-lg">
                            <div className="w-full h-32 bg-gray-200 rounded-lg mb-2" />
                            <h3 className="font-medium">Video Title {item}</h3>
                            <p className="text-sm text-gray-600">1.2M views • 2 weeks ago</p>
                        </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </TabsContent>
        
        <TabsContent value="sources">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {['Reddit', 'Quora', 'YouTube', 'Google', 'App Reviews'].map((source) => (
                  <Alert key={source}>
                    <FileText className="h-4 w-4" />
                    <AlertDescription>
                      Data from {source}: 1,234 entries analyzed
                    </AlertDescription>
                  </Alert>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="competitors" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="text-blue-600" />
                  Competitor Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {insights.competitors.map((competitor, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{competitor.name}</span>
                        <span className="flex items-center gap-1">
                          {competitor.growth > 0 ? (
                            <ArrowUp className="text-green-500 h-4 w-4" />
                          ) : (
                            <ArrowDown className="text-red-500 h-4 w-4" />
                          )}
                          {Math.abs(competitor.growth)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${competitor.engagement}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Engagement Score: {competitor.engagement}</span>
                        <span>Sentiment: {competitor.sentiment.toFixed(1)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
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
                    { type: "Social Media", percentage: 45 }
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
            </Card>
          </div>
        </TabsContent>

        {/* New Recommendations Section */}
        <TabsContent value="recommendations" className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {insights.recommendations.map((rec, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Zap className="text-blue-600 h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-lg">{rec.type}</span>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          rec.impact === 'High' ? 'bg-green-100 text-green-800' :
                          rec.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {rec.impact} Impact
                        </span>
                      </div>
                      <p className="text-gray-600">{rec.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ArtFinderDashboard;