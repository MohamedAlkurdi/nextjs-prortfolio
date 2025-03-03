export default function page({ params }) {
    console.log(params.locale)
    console.log(params.id)
    return (
        <div>
            <h>Dynamic blog page</h>
        </div>
    )
}
