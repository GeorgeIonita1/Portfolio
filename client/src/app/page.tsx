import AboutMe from "@/components/AboutMe/AboutMe";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Presentation from "@/components/Presentation/Presentation";
import SkillsOverview from "@/components/SkillsOverview/SkillsOverview";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Presentation />
      <AboutMe />
      <SkillsOverview />
    </>
  )
}
