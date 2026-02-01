import { ExternalLink, Eye, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const HospitalExamplesSection = () => {
  const hospitalExamples = [
    {
      name: "Hallelujah Hospital",
      url: "https://hallelujahhospital.com/",
      description: "A modern, professional hospital website showcasing comprehensive healthcare services with clean design and intuitive navigation.",
      features: ["Clean Professional Design", "Comprehensive Service Listings", "Easy Navigation", "Modern UI/UX"],
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Dalmar Hospital",
      url: "https://dalmarhospital.so/",
      description: "An elegant hospital website demonstrating advanced healthcare digital presence with sophisticated design elements.",
      features: ["Sophisticated Design", "Advanced Healthcare Features", "Professional Layout", "Trust-building Elements"],
      color: "from-green-500 to-green-600"
    }
  ];

  const handleViewExample = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="hospital-examples" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Award className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional Hospital Websites
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the caliber of hospital websites I create. These examples demonstrate the professional, 
            modern, and user-friendly designs that transform healthcare digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {hospitalExamples.map((hospital, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${hospital.color}`}></div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {hospital.name}
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {hospital.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    {hospital.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${hospital.color}`}></div>
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <Button 
                      onClick={() => handleViewExample(hospital.url)}
                      className="w-full group relative overflow-hidden"
                      size="lg"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>View Live Website</span>
                      </span>
                      <div className={`absolute inset-0 bg-gradient-to-r ${hospital.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              What Makes These Websites Exceptional
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold text-lg">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Professional Design</h4>
                <p className="text-sm text-gray-600">Clean, modern layouts that build trust and credibility</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold text-lg">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">User Experience</h4>
                <p className="text-sm text-gray-600">Intuitive navigation and easy access to information</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold text-lg">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Functionality</h4>
                <p className="text-sm text-gray-600">Advanced features that serve both patients and staff</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};