export const Card = ({userInfo}) => {
const {firstName, university, image} = userInfo;
    
    return (
        <div>
            <div className ="card w-96 bg-base-100 shadow-xl p-5">
                
                <div className="avatar online flex justify-center">
  <div className="w-24 rounded-full">
    <img src={image} />
  </div>
</div>
<div className="avatar offline">
  <div className="w-24 rounded-full">
    <img src={image} />
  </div>
</div>
                
                <div className="card-body">
                    <h2 className="card-title">{firstName}</h2>
                    <p></p>
                    <p>{university}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">More Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Card;