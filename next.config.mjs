import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = withMDX()({
	experimental: {
		mdxRs: true,
	},
	compiler: {
		emotion: true,
	},
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	reactStrictMode: true,
});

export default nextConfig;
