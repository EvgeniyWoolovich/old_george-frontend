type Props = {active: string, name: string, onClick: (e: string) => void}

export const MenuButton = ({active, name, onClick}: Props) => {
    return (
        <div className={`dish__button ${active===name ? 'active' : ''}`} onClick={() => onClick(name)}>{name}</div>
    )
}