import Link from "next/link"

interface NewsProp{
    title:string,
    description:string,
    date:string,
    link:string

}
const News: React.FC<NewsProp> = ({ title,description,date,link, }) => {
    return(

        <div>
            <h2 role="date">{date}</h2>
            <h1 role="heading">{title}</h1>
            <p role="description">{description}</p>
             <Link href={link} legacyBehavior>
                <a role="link">hghvhh</a>
             </Link>
        </div>
    )
}

export default News