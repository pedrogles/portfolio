import './skeleton.scss';

export function Skeleton({ height, width, rounded = false, customClass = ''}) {
    return (
        <div className={`skeleton ${customClass}`} 
            style={{ 
                height: height, 
                width: width, 
                borderRadius: rounded ? '50%' : 'none'
            }}>
        </div>
    )
}