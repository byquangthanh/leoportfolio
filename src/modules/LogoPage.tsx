import Image from "next/image";
import Logo from "../../public/assets/leologo.svg";

export default function LogoPage() {
  return (
    <section className="min-h-screen w-full bg-white flex sm:items-end justify-center fixed z-0 px-8 items-center">
      <Image src={Logo} alt={"Leo Logo"} className="w-full" />
    </section>
  );
}
