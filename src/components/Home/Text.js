import Decoration from '../../assets/Decoration.svg';

const Text = () => {
    return (
        <div className="text">
            <h2 className="text-title1">Zacznij pomagać!</h2>
            <h2 className="text-title1">Oddaj niechciane rzeczy w zaufane ręce</h2>
            <img src={Decoration} alt='Decoration' className="text-decoration"></img>
        </div>
    )
}
export default Text;