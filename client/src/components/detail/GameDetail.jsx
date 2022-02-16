import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getGamesById, loading} from '../../redux/actions/index'
import Loading from '../loading/Loading'
import style from './GameDetail.module.css'
