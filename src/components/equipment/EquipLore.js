const pStyle = {
    marginTop: "3rem",
    marginLeft: "10%",
    marginRight: "10%"
}
const EquipLore = ({ lore }) => {
    return (
        <>
            {lore ? <p style={pStyle}>{lore}</p> : <p style={pStyle}>Lore is currently unavailable</p>}
        </>
    )
}

export default EquipLore;