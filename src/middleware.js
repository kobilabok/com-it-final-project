export {default} from "next-auth/middleware"

export const config = {matcher: ["/shopping-cart/:path*", "/products/:path*", "/about-us"]}; 
// wildcard - :path*