import React, {useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import getFilterPublishers from "../../utilities/filters_util";

function FilterModal(props) {
    // localStorage.removeItem("publisherFilters");
    const publishers = [["thairath", "Thairath | ไทยรัฐ"] ,
        ["posttoday", "PostToday | โพสต์ทูเดย์"],
        ["blognone", "Blognone"],
        ["matichon","Matichon | มติชน"]]
    const tempFilter = new Set(getFilterPublishers());
    const [filterList, setFilter] = useState(publishers.map(publisher => tempFilter.has(publisher[0])))

    const handleToggle = (idx) => () => {
        const newFilter = [...filterList];
        newFilter[idx] = !newFilter[idx];
        setFilter(newFilter);
    }

    const handleFilterUpdate = () => {
        props.setClose();
        const tmp = [];
        filterList.forEach((x, idx) => {
            if(x){
                tmp.push(publishers[idx][0]);
            }
        })
        localStorage.setItem("publisherFilters", JSON.stringify(tmp));
        window.location.reload(false);
    }

    return (
        <Dialog
            fullWidth
            maxWidth="sm"
            open={props.open}
            onClose={props.setClose}
            // onClose={handleClose}
            aria-labelledby="max-width-dialog-title"
        >
            <DialogTitle id="max-width-dialog-title">News Filters</DialogTitle>
            <DialogContent>
                <List>
                    {publishers.map((publisher, idx) =>
                        <ListItem key={publisher[0]} button onClick={handleToggle(idx)}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={filterList[idx]}
                                    disableRipple
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={publisher[1]}
                            />
                        </ListItem>
                    )}
                </List>
                <DialogActions color="primary">
                    <Button onClick={handleFilterUpdate}>
                        Submit
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}

export default FilterModal;