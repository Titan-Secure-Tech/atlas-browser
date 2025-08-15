import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Film, Video, Download } from "lucide-react";

const VLCIcon = () => (
  <div className="relative">
    <div className="w-32 h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-lg">
      {/* Film strip holes */}
      <div className="absolute left-2 top-2 space-y-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="w-3 h-3 bg-white rounded border border-gray-300" />
        ))}
      </div>
      <div className="absolute right-2 top-2 space-y-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="w-3 h-3 bg-white rounded border border-gray-300" />
        ))}
      </div>
      
      {/* VLC Cone */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Cone base */}
          <div className="w-12 h-3 bg-orange-500 rounded-full"></div>
          {/* Cone body */}
          <div className="w-10 h-8 bg-orange-500 rounded-t-full mx-auto relative">
            <div className="absolute top-2 w-full h-1 bg-white opacity-80 rounded-full"></div>
            <div className="absolute top-5 w-full h-1 bg-white opacity-80 rounded-full"></div>
          </div>
          {/* Cone tip */}
          <div className="w-6 h-4 bg-orange-500 rounded-t-full mx-auto"></div>
          <div className="w-3 h-2 bg-orange-600 rounded-full mx-auto"></div>
        </div>
      </div>
      
      {/* MPEG label */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <span className="text-gray-700 font-bold text-lg">MPEG</span>
      </div>
      
      {/* Page curl */}
      <div className="absolute top-0 right-0 w-6 h-6 bg-white rounded-bl-lg shadow-md"></div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-gray-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Film className="w-8 h-8 text-orange-600" />
            <h1 className="text-2xl font-bold text-gray-900">Atlas Browser</h1>
          </div>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-8">
          {/* VLC MPEG Icon */}
          <div className="flex justify-center">
            <VLCIcon />
          </div>
          
          {/* Hero Text */}
          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-gray-900">
              Universal Media Browser
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse, preview, and manage your media files with support for all formats. 
              Built with the power of VLC's media engine.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Play className="w-5 h-5 mr-2" />
              Start Browsing
            </Button>
            <Button size="lg" variant="outline">
              <Video className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Film className="w-5 h-5 mr-2 text-orange-600" />
                Universal Format Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Support for MPEG, AVI, MP4, MKV, and hundreds of other media formats
                through VLC's powerful codec library.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Video className="w-5 h-5 mr-2 text-orange-600" />
                Smart Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Instant thumbnails and metadata extraction for quick file identification
                and organization.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Play className="w-5 h-5 mr-2 text-orange-600" />
                Seamless Playback
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                One-click playback with VLC integration for the best media
                viewing experience.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
