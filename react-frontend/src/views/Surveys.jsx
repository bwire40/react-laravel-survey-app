import PageComponent from "../components/PageComponent";
import SurveyListItem from "../components/SurveyListItem";
import { useStateContext } from "../contexts/ContextProvider";

const Surveys = () => {
    const onDeleteClick = () => {
        // console.log("Delete");
    };
    const { surveys } = useStateContext();
    // console.log(surveys);
    return (
        <>
            <PageComponent title="Surveys">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 border">
                    {surveys.map((survey) => (
                        <SurveyListItem
                            key={survey.id}
                            survey={survey}
                            onDeleteClick={onDeleteClick}
                        />
                    ))}
                </div>
            </PageComponent>
        </>
    );
};

export default Surveys;
