import  PropTypes from "prop-types"

const Button1 = ({label,link}) => {
  return ( 
    <button className='btn' href='{link}'>{label}</button>
  )
}
Button1.defaultProps = {
    link: "home.html"
}
export default Button1