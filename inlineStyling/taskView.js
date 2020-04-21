const TaskView = ({ onRemove, task }) => {
    const { category, subCategory, details, amount } = task;
    return (
        <Card
            style={{
                paddingLeft: "16px",
                paddingRight: "38px",
                paddingTop: "16px",
                paddingBottom: "16px",
                marginLeft: "16px",
                position: "relative"
            }}
        >
            <IconButton
                onClick={() => onRemove(task)}
                style={{
                    position: "absolute",
                    top: "-3px",
                    right: "-3px",
                    cursor: "pointer"
                }}
            >
                <Cancel />
            </IconButton>
            <div style={{
                marginBottom: "8px"
            }}>
                Category:
                <span style={{
                    color: "#f50d57"
                }}>
                    {category}
                </span>
            </div>
            <div style={{
                marginBottom: "8px"
            }}>
                Sub Category:
                <span style={{
                    color: "#f50d57"
                }}>
                    {subCategory}
                </span>
            </div>
            <div style={{
                marginBottom: "8px"
            }}>
                Description:
                <span style={{
                    color: "#f50d57"
                }}>
                    {details}
                </span>
            </div>
            <div>
                Amount:
                <span style={{
                    color: "#f50d57"
                }}>
                    {amount}
                </span>
            </div>
        </Card>
    );
