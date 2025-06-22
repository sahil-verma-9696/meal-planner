"use client";

import { AREA_TO_COUNTRY_CODE, Area } from "@/data/constants";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// 👇 this is the API structure for each item
type AreaAPI = {
  strArea: string;
};

type AreasProps = {
  areas: AreaAPI[];
  showToggle: boolean;
  expanded: boolean;
  onToggle: () => void;
};

export default function NavItemAreas() {
  const [areas, setAreas] = useState<AreaAPI[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleHover = () => {
    setShowPopup(true);
    if (!hasFetched) {
      setIsLoading(true);
      fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
        .then((res) => res.json())
        .then((data) => {
          setAreas(data.meals);
          setHasFetched(true);
        })
        .catch((err) => console.error("Error fetching areas", err))
        .finally(() => setIsLoading(false));
    }
  };

  const handleLeave = () => {
    setShowPopup(false);
    setExpanded(false);
  };

  const visibleAreas = expanded ? areas : areas.slice(0, 5);

  return (
    <div
      className="relative"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="flex items-center select-none p-2 hover:bg-[#fff5ef] rounded-lg cursor-pointer">
        <span>Areas</span>
        <ChevronDown className="ml-1" />
      </div>

      {showPopup && (
        <div className="absolute top-[100%] z-10">
          <div className="mt-2 border border-orange-400 bg-white dark:bg-[#1a1a1a] w-64 rounded-lg p-2 z-50 shadow-lg h-[250px] overflow-auto">
            {isLoading ? (
              <Skeleton />
            ) : (
              <Areas
                areas={visibleAreas}
                showToggle={areas.length > 6}
                expanded={expanded}
                onToggle={() => setExpanded((prev) => !prev)}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function Areas({ areas, showToggle, expanded, onToggle }: AreasProps) {
  return (
    <>
      {areas.map((area, index) => {
        const code = AREA_TO_COUNTRY_CODE[area.strArea as Area] || "unknown";
        return (
          <Link
            href={`/area/${area.strArea}`}
            key={index}
            className="flex gap-2 items-center px-2 py-1 bg-white hover:bg-orange-50 dark:hover:bg-[#2a2a2a] rounded-md cursor-pointer"
          >
            <Image
              src={`https://www.themealdb.com/images/icons/flags/big/32/${code}.png`}
              alt={area.strArea}
              width={32}
              height={32}
            />
            {area.strArea}
          </Link>
        );
      })}

      {showToggle && (
        <p
          onClick={onToggle}
          className="text-center text-sm mt-2 text-orange-500 hover:underline cursor-pointer"
        >
          {expanded ? "Show Less" : "Show More"}
        </p>
      )}
    </>
  );
}

function Skeleton() {
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="px-2 py-1 my-2 animate-pulse h-6 bg-orange-50 dark:bg-[#2a2a2a] rounded-md"
        ></div>
      ))}
    </>
  );
}
