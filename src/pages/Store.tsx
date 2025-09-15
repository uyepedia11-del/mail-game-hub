import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Store = () => {
  const products = [
    {
      id: 1,
      name: "Premium Gaming Account Package",
      description: "Paket akun gaming premium dengan berbagai bonus dan item eksklusif",
      price: "Rp 150.000",
      originalPrice: "Rp 200.000",
      rating: 4.8,
      reviews: 156,
      category: "Gaming Account",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Starter Gaming Bundle",
      description: "Bundle akun gaming untuk pemula dengan panduan lengkap",
      price: "Rp 75.000",
      originalPrice: "Rp 100.000",
      rating: 4.6,
      reviews: 89,
      category: "Bundle",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "VIP Community Access",
      description: "Akses VIP ke komunitas gaming eksklusif dengan mentor pribadi",
      price: "Rp 250.000",
      originalPrice: "Rp 350.000",
      rating: 4.9,
      reviews: 234,
      category: "Community",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Gaming Guide & Tips",
      description: "Koleksi lengkap panduan dan tips dari pro player",
      price: "Rp 50.000",
      originalPrice: "Rp 75.000",
      rating: 4.7,
      reviews: 112,
      category: "Guide",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">AkunStarter Store</h1>
            <p className="text-muted-foreground">Akun gaming premium dan bundle eksklusif</p>
          </div>
          <Link to="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Login
            </Button>
          </Link>
        </div>

        {/* Categories */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {["Semua", "Gaming Account", "Bundle", "Community", "Guide"].map((category) => (
            <Badge key={category} variant="outline" className="whitespace-nowrap cursor-pointer hover:bg-primary hover:text-primary-foreground">
              {category}
            </Badge>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="aspect-video bg-muted rounded-md mb-3 flex items-center justify-center">
                  <ShoppingCart className="h-8 w-8 text-muted-foreground" />
                </div>
                <Badge variant="secondary" className="w-fit">{product.category}</Badge>
                <CardTitle className="line-clamp-2 text-lg">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} ulasan)</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                  <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                </div>

                <Button className="w-full gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Beli Sekarang
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Butuh panduan atau ingin bergabung dengan komunitas?
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/blog">
              <Button variant="outline">Baca Blog</Button>
            </Link>
            <Link to="/community">
              <Button>Lihat Komunitas</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;