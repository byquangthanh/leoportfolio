import Image from "next/image";
import Logo from "../../public/assets/leologo.svg";

export default function LogoPage() {
  return (
    <section className="min-h-screen w-full bg-white flex items-end justify-center fixed z-0 px-8">
      <Image src={Logo} alt={"Leo Logo"} className="w-full" />
    </section>
  );
}
