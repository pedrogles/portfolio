import './skeleton.scss';

export function Skeleton({ height, width, rounded = false, className = ''}) {
    return (
        <div className={`skeleton ${className}`} 
            style={{ 
                height: height, 
                width: width, 
                borderRadius: rounded ? '50%' : 0
            }}>
        </div>
    )
}