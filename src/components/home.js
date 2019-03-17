import React, { Component} from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from 'prop-types';
import classNames from 'classname';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import '../styles/global.css';
import placeholder from './Nature.jpg';

const styles = theme => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    root: {
        flexGrow: 1,
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {
        maxWidth: 1600,
    },
    media: {
        height: 650,
    }
  });

class Home extends Component {
    render() {
        const {classes} = this.props;
        return (
        <div className={classNames('fillParent', classes.container, classes.root)}>
            <Grid container spacing={36}>
              <Grid item xs={12}>
              <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={placeholder}
                    title="Nature"
                    />
              </Card>
              </Grid>
              <Grid item xs={4}>
              <Card className={classes.card}>
                <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image=''
                    title="Learn"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Learn
                        </Typography>
                        <Typography component="p">
                            Learn about all the different career opportunities you could explore
                            across the continent!
                        </Typography>
                    </CardContent>
                </CardActionArea>
              </Card>
              </Grid>
              <Grid item xs={4}>
              <Card className={classes.card}>
                <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image=''
                    title="Connect"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Connect
                        </Typography>
                        <Typography component="p">
                            Strengthen the connection between fellow job seekers and our 
                            Africa's top companies through the ROOTS community.
                        </Typography>
                    </CardContent>
                </CardActionArea>
              </Card>
              </Grid>
              <Grid item xs={4}>
              <Card className={classes.card}>
                <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image=''
                    title="Apply"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Apply
                        </Typography>
                        <Typography component="p">
                            Find a well-paying job in any field of work or
                            seek grants and relocation offers.
                        </Typography>
                    </CardContent>
                </CardActionArea>
              </Card>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                Featured Career News
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                Footer
                </Paper>
              </Grid>
            </Grid>
          </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Home);