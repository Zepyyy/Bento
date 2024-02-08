export default function PitchCards({classes}: {classes: string}) {
    const title = "Quentin Stubecki";

    return (
        <div className={classes}>
            <div className="text-4xl font-semibold">{title}</div>
            <div className="flex flex-col justify-center items-center mt-8">
                <div className="text-2xl font-semibold">I&lsquo;m a <span className={"text-Mirage-400"}>developer</span>,
                    guided by a love for technology, music and coffee.</div>
                <div className="text-2xl font-semibold mt-8">Stepping into <span className={"text-Mirage-400"}>design</span> and React, eager to learn and explore new things.</div>
            </div>
        </div>
    )
}