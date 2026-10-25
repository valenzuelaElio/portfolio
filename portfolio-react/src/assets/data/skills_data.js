
import {
  SiCplusplus,
  SiSharp,
  SiJavascript,
  SiPython,
  SiBlender,
  SiUnity,
  SiUnrealengine,
  SiGodotengine,
  SiGit,
  SiReact,
  SiPhp,
  SiCss,
  SiHtml5,
  SiMysql,
  SiFigma,
  SiC,
  SiKrita

} from 'react-icons/si';

import { FaImage } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';

const skillsData = [
  {
    title: {
      "es" : 'Lenguajes de programación',
      "en" : 'Programming Languages'
    },
    skills: [
      { name: 'C#', icon: SiSharp },
      { name: 'C++', icon: SiCplusplus },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Python', icon: SiPython },
      { name: 'React', icon: SiReact },
      { name: 'GDScript', icon: SiGodotengine },
      { name: 'PHP', icon: SiPhp },
      { name: 'CSS', icon: SiCss },
      { name: 'HTML', icon: SiHtml5 },
      { name: 'MySql', icon: SiMysql },
      { name: 'C', icon: SiC },
    ],
  },
  {
    title: {
      "es" : 'Software',
      "en" : 'Software'
    },
    skills: [
      { name: 'Blender', icon: SiBlender },
      { name: 'Photoshop', icon: FaImage },
      { name: 'Illustrator', icon: FaImage },
      { name: 'Git', icon: SiGit },
      { name: 'Visual Studio', icon: FaCode },
      { name: 'VS Code', icon: FaCode },
      { name: 'Figma', icon: SiFigma },
      { name: 'Krita', icon: SiKrita },

    ],
  },
  {
    title: {
      "es" : 'Engines y Frameworks',
      "en" : 'Engines & Frameworks'
    },
    skills: [
      { name: 'Unity', icon: SiUnity },
      { name: 'Unreal Engine', icon: SiUnrealengine },
      { name: 'Godot', icon: SiGodotengine },
    ],
  },
];

export default skillsData;
