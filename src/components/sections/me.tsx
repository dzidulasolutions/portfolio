import Image from "next/image"
import {
      FiSearch,
      FiCheckCircle,
      FiZap,
      FiTarget,
      FiUsers,
      FiCode,
      FiTrendingUp,
} from "react-icons/fi"

const qualities = [
      {
            icon: FiSearch,
            title: "Curieux",
            description: "Toujours apprendre",
            style: "ml-16 lg:ml-26",
      },
      {
            icon: FiCheckCircle,
            title: "Rigoureux",
            description: "Travail propre",
            style: "ml-6 lg:ml-16",
      },
      {
            icon: FiZap,
            title: "Autonome",
            description: "Trouver des solutions",
            style: "ml-2 lg:ml-12",
      },
      {
            icon: FiTarget,
            title: "Persévérant",
            description: "Aller jusqu'au bout",
            style: "ml-6 lg:ml-16",
      },
      {
            icon: FiUsers,
            title: "Esprit d'équipe",
            description: "Construire ensemble",
            style: "ml-16 lg:ml-16",
      },
]

const Me = () => {
      return (
            <div className="w-full flex flex-col lg:flex-row justify-center gap-10 lg:gap-16 items-center">

                  {/* QUALITIES */}
                  <div className="w-[70%] lg:w-60 h-auto roundex-xs flex flex-col items-center justify-center gap-5">

                        {qualities.map((quality) => {
                              const Icon = quality.icon

                              return (
                                    <div key={quality.title}
                                          className={`font-ui w-[90%] ${quality.style} px-1 py-2 h-12 rounded-xs border border-(--color-border) bg-(--color-surface) transition-colors duration-200 flex justify-start items-center gap-2`}
                                    >
                                          <span className="h-10 w-10 rounded-xs bg-foreground flex items-center justify-center shrink-0">
                                                <Icon className="text-background text-sm" />
                                          </span>

                                          <div className="flex flex-col leading-none">
                                                <span className="font-ui text-xs font-bold">
                                                      {quality.title}
                                                </span>

                                                <span className="font-ui text-xs text-(--color-muted)">
                                                      {quality.description}
                                                </span>
                                          </div>
                                    </div>
                              )
                        })}

                  </div>

                  {/* PHOTO */}
                  <div className="w-60 h-84 roundex-xs relative overflow-hidden shrink-0">
                        <Image
                              src="/images/profil.png"
                              width={500}
                              height={500}
                              alt="Ma photo"
                              className="w-full h-full rounded-xs object-cover"
                        />

                        <div className="absolute bottom-0 left-0 w-full h-28 bg-linear-to-t from-foreground via-foreground/70 to-transparent"></div>
                  </div>

                  {/* RIGHT CARDS */}
                  <div className="w-[90%] lg:w-60 h-auto gap-12 flex flex-col items-center justify-center">

                        <div className="w-40 h-40 rounded-sm border border-(--color-border) bg-(--color-surface) transition-colors duration-200 -rotate-6 flex flex-col justify-center items-center gap-2 p-4">

                              <span className="h-10 w-10 rounded-xs bg-foreground flex items-center justify-center shrink-0">
                                    <FiCode className="text-background text-sm" />
                              </span>

                              <span className="uppercase font-ui text-xs font-bold">
                                    TYPE DE PROJET
                              </span>

                              <ul className="font-ui text-xs text-(--color-muted) text-center">
                                    <li>Web</li>
                                    <li>Mobile</li>
                              </ul>

                        </div>

                        <div className="w-40 h-40 rounded-sm border border-(--color-border) bg-(--color-surface) transition-colors duration-200 rotate-12 flex flex-col justify-center items-center gap-2 p-4">

                              <span className="h-10 w-10 rounded-xs bg-foreground flex items-center justify-center shrink-0">
                                    <FiTrendingUp className="text-background text-sm" />
                              </span>

                              <span className="uppercase font-ui text-xs font-bold">
                                    Mon approche
                              </span>

                              <ul className="font-ui text-xs text-(--color-muted) text-center">
                                    <li>Apprendre</li>
                                    <li>Construire</li>
                                    <li>Améliorer</li>
                              </ul>

                        </div>

                  </div>

            </div>
      )
}

export default Me