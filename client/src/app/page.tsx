import AboutMe from "@/components/AboutMe/AboutMe";
import Experience from "@/components/Experience/Experience";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Presentation from "@/components/Presentation/Presentation";
import RecentWork from "@/components/RecentWork/RecentWork";
import SkillsOverview from "@/components/SkillsOverview/SkillsOverview";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Presentation />
      <AboutMe />
      <Experience />
      <SkillsOverview />
      <RecentWork />
    </>
  )
}
