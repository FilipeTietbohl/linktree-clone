import './RedesSociais.css'

const RedesSociais = () => {

    const ListaRedes = [
        { id: 1, urlNome: 'Instagram', url:'https://www.instagram.com/tb_filipe/' },
        { id: 2, urlNome: 'Facebook', url:'https://www.facebook.com/felepsbarros/' },
        { id: 3, urlNome: 'Twitter', url:'https://twitter.com/FilepsTB'},
        { id: 4, urlNome: 'Youtube', url:'https://www.youtube.com/channel/UCWQyUuFjZJeloTGB7EsSePQ' },
        { id: 5, urlNome: 'WhatsApp', url:'https://api.whatsapp.com/send?phone=5551997879494&text=Eu%20vim%20aqui%20pelo%20vercel%20uhul' },

    ]

    const LinksRedes = ListaRedes.map((props) =>
    <div key={props.id} className='conteudo_links'>
        <a href={props.url}>{props.urlNome}</a>
    </div>)

    return (
        <>
            {LinksRedes}
        </>
    )
}

export default RedesSociais