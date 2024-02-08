export default function IconCard({classes, icon}: {classes: string, icon:string}) {
    return (
        <div className={classes + " flex flex-col justify-center items-center text-3xl"}>
            {icon}
        </div>
    )
}