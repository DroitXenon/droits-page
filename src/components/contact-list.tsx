import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import MotionList from "./motion-list";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
type Contact = {
  name: string;
  className: string;
  href: string;
  icon: any;
};
const contacts: Contact[] = [
  {
    name: "Github",
    className: "bg-black hover:bg-gray-800/90",
    href: "https://github.com/DroitXenon",
    icon: faGithub,
  },
  {
    name: "Linkedin",
    className: "bg-black hover:bg-gray-800/90",
    href: "https://www.linkedin.com/in/juntaojustinwang/",
    icon: faLinkedin,
  },
  {
    name: "Email",
    className: "bg-black hover:bg-gray-800/90",
    href: "mailto:droitxenon@outlook.com",
    icon: faEnvelope,
  },
  {
    name: "Instagram",
    className: "bg-black hover:bg-gray-800/90",
    href: "https://instagram.com/alt2ss/",
    icon: faInstagram,
  },
];
export default function ContactList({
  delayOffset = 0,
  showWhenInView = true,
}: {
  delayOffset?: number;
  showWhenInView?: boolean;
}) {
  return (
    <MotionList delayOffset={delayOffset} showWhenInView={showWhenInView}>
      {contacts.map((contact, index) => (
        <TooltipProvider delayDuration={0} key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full p-3 md:h-12 md:w-12",
                  contact.className,
                )}
                asChild
                aria-label={contact.name}
              >
                <a
                  href={contact.href}
                  target="_blank"
                  aria-label={contact.name}
                >
                  <FontAwesomeIcon icon={contact.icon} className="w-fit" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={6}>
              <p>{contact.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </MotionList>
  );
}
