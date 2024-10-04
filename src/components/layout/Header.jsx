import { Plane } from "lucide-react";

export default function Header() {
  return (
    <header className="text-center px-4 py-8">
      <Plane size={60} color="white"  className="inline"/>
      <h1 className="text-secondary  text-5xl font-semibold my-6">Pick-<span className="text-white">A</span>-Place</h1>
      <p className="text-white text-3xl">Create Your personal collection of places you wuold like to visit</p>

    </header>
  )
}
