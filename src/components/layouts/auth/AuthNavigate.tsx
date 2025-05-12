import Link from "next/link"

interface Props {
  desc: string
  navigateText: string
  slug: string
}

export default function AuthNavigate({
    desc,
    navigateText,
    slug
}: Props){
    return (
        <div className="flex justify-center items-center gap-1 text-sm">
            <span className="text-muted-foreground">{desc}</span> <Link href={slug} className="font-semibold">{navigateText}</Link>
        </div>
    )
}