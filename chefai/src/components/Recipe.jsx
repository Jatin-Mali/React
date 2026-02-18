import Markdown from "react-markdown"
export default function Recipe(props) {
    return (
        <>
            <section>
                <h1>Chef Recommends: </h1>
               <Markdown>{props.recipe}</Markdown>
            </section>
        </>
    )
}