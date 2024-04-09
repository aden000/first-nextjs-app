import Hero from "./ui/hero";
import Navbar from "./ui/navbar";

export default function Home() {
	return (
		<>
			<Navbar
				navbarlist={[
					{
						navTitle: "Home",
						navUrl: "/dashboard",
						navIcon: "bi bi-house-fill",
					},
					{
						navTitle: "Portfolio",
						navUrl: "/portfolio",
						navIcon: "bi bi-file-post",
					},
					{
						navTitle: "Blog",
						navUrl: "/blog",
						navIcon: "bi bi-substack",
					},
				]}
			/>
			<Hero
				title={"Ancrek Website"}
				body={
					"Selamat Datang di Ancrek Website, Sebuah Web yang dimana Achmad Ade Nugroho meletakan portfolionya di website ini"
				}
				buttonData={{
					title: "Let's Go",
					url: "https://www.ancrek.my.id",
				}}
			/>
			<Hero
				title={"Teknik Informatika ITATS"}
				body={
					"Adalah almamater saya yang membuat saya dapat menjadi sarjana hingga saat ini"
				}
				buttonData={{
					title: "Kunjungi Web Informatika ITATS",
					url: "https://if.itats.ac.id",
				}}
				bgColorTw="bg-stone-800"
			/>
		</>
	);
}
