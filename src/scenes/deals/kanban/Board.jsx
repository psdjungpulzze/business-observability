import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";

export default function Board() {
    // const [completed, setCompleted] = useState([]);
    // const [incomplete, setIncomplete] = useState([]);
    // const [backlog, setBacklog] = useState([]);
    // const [inReview, setInReview] = useState([]);
    const [Qualification, setQualification] = useState([]);
    const [NeedsAnalysis, setNeedsAnalysis] = useState([]);
    const [ValueProposition, setValueProposition] = useState([]);
    const [IdentifyDecisionMakers, setIdentifyDecisionMakers] = useState([]);
    const [ProposalPriceQuote, setProposalPriceQuote] = useState([]);
    const [NegotiationReview, setNegotiationReview] = useState([]);
    const [ClosedWon, setClosedWon] = useState([]);
    const [ClosedLost, setClosedLost] = useState([]);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((json) => {
                setQualification(json.filter((task) => task.completed));
                setClosedWon(json.filter((task) => !task.completed));
            });
    }, []);

    const handleDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination || source.droppableId === destination.droppableId) return;

        deletePreviousState(source.droppableId, draggableId);

        const task = findItemById(draggableId, [...Qualification, ...NeedsAnalysis, ...ValueProposition, ...IdentifyDecisionMakers, ...ProposalPriceQuote, ...NegotiationReview, ...ClosedWon, ...ClosedLost]);

        setNewState(destination.droppableId, task);

    };

    function deletePreviousState(sourceDroppableId, taskId) {
        switch (sourceDroppableId) {
            case "1":
                setQualification(removeItemById(taskId, Qualification));
                break;
            case "2":
                setNeedsAnalysis(removeItemById(taskId, NeedsAnalysis));
                break;
            case "3":
                setValueProposition(removeItemById(taskId, ValueProposition));
                break;
            case "4":
                setIdentifyDecisionMakers(removeItemById(taskId, IdentifyDecisionMakers));
                break;
            case "5":
                setProposalPriceQuote(removeItemById(taskId, ProposalPriceQuote));
                break;
            case "6":
                setNegotiationReview(removeItemById(taskId, NegotiationReview));
                break;
            case "7":
                setClosedWon(removeItemById(taskId, ClosedWon));
                break;
            case "8":
                setClosedLost(removeItemById(taskId, ClosedLost));
                break;
        }
    }
    function setNewState(destinationDroppableId, task) {
        let updatedTask;
        switch (destinationDroppableId) {
            case "1":   // Qualification
                updatedTask = { ...task, completed: false };
                setQualification([updatedTask, ...Qualification]);
                break;
            case "2":  // Needs Analysis
                updatedTask = { ...task, completed: true };
                setNeedsAnalysis([updatedTask, ...NeedsAnalysis]);
                break;
            case "3":  // Value Proposition
                updatedTask = { ...task, completed: false };
                setValueProposition([updatedTask, ...ValueProposition]);
                break;
            case "4":  // Identify Decision Makers
                updatedTask = { ...task, completed: false };
                setIdentifyDecisionMakers([updatedTask, ...IdentifyDecisionMakers]);
                break;
            case "5":  // Identify Decision Makers
                updatedTask = { ...task, completed: false };
                setProposalPriceQuote([updatedTask, ...ProposalPriceQuote]);
                break;
            case "6":  // Identify Decision Makers
                updatedTask = { ...task, completed: false };
                setNegotiationReview([updatedTask, ...NegotiationReview]);
                break;
            case "7":  // Identify Decision Makers
                updatedTask = { ...task, completed: false };
                setClosedWon([updatedTask, ...ClosedWon]);
                break;
            case "8":  // Identify Decision Makers
                updatedTask = { ...task, completed: false };
                setClosedLost([updatedTask, ...ClosedLost]);
                break;
        }
    }
    function findItemById(id, array) {
        return array.find((item) => item.id == id);
    }

    function removeItemById(id, array) {
        return array.filter((item) => item.id != id);
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <h2 style={{ textAlign: "center" }}>PROGRESS BOARD</h2>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    width: "1300px",
                    margin: "0 auto"
                }}
            >
                <Column title={"Qualification"} tasks={Qualification} id={"1"} />
                <Column title={"Needs Analysis"} tasks={NeedsAnalysis} id={"2"} />
                <Column title={"Value Proposition"} tasks={ValueProposition} id={"3"} />
                <Column title={"Identify Decision Makers"} tasks={IdentifyDecisionMakers} id={"4"} />
                <Column title={"Proposal/Price Quote"} tasks={ProposalPriceQuote} id={"5"} />
                <Column title={"Negotiation/Review"} tasks={NegotiationReview} id={"6"} />
                <Column title={"Closed Won"} tasks={ClosedWon} id={"7"} />
                <Column title={"Closed Lost"} tasks={ClosedLost} id={"8"} />
            </div>
        </DragDropContext>
    );
}