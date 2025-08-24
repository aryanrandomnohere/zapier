"use client";
import { lazy, Suspense, useEffect, useState } from "react";
import SideModal from "@/app/ui/SideModal";
// const SideModal = lazy(() => import("@/app/ui/SideModal"));
const ActionButton = lazy(
  () => import("@/app/components/buttons/ActionButton"),
);
const CancelButton = lazy(
  () => import("@/app/components/buttons/CancelButton"),
);
const SaveButton = lazy(() => import("@/app/components/buttons/SaveButton"));
const ToastNotification = lazy(() => import("@/app/ui/Notification"));
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { zapCreateState } from "../../../RecoilState/store/zapCreate";
import axios from "axios";
import { ItemType, onStepEnum, RecordMetadata } from "@repo/types";
import {
  configureStepDetails,
  onStep,
  selectedItemMetaData,
} from "@/app/RecoilState/currentZap";
import { useParams } from "next/navigation";
import { getSession } from "next-auth/react";
import {
  recordsAtom,
  selectedRecord,
} from "@/app/RecoilState/store/recordsAtom";
import { useRouter } from "next/navigation";
import { Play } from "lucide-react";
import { userAtom } from "@/app/RecoilState/store/userAtom";
import toast from "react-hot-toast";
import { LoadingSpinner } from "@/app/components/ui/LoadingSpinner";
import { SideModalSkeleton } from "@/app/components/ui/SuspenseLoaders/SideModalSkeleton";
const MovableCells = lazy(() => import("./MovableCells"));
export default function CreatePage() {
  const [zapState, setZapState] = useRecoilState(zapCreateState);

  const setRecords = useSetRecoilState<RecordMetadata[]>(recordsAtom);
  const setSelectedRecordId = useSetRecoilState(selectedRecord);
  const configureId = useRecoilValue(configureStepDetails);
  const [user, setUser] = useRecoilState(userAtom);
  const selectedRecordId = useRecoilValue(selectedRecord);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const { zapId } = useParams();
  const [isPublishing, setIsPublishing] = useState<boolean>(false);
  const [isPublished, setIsPublished] = useState<boolean>(false);
  const [unauthorized, setUnauthorized] = useState<boolean>(false);
  const [metaData, setMetaData] = useRecoilState(selectedItemMetaData);
  const [reRender, setReRender] = useState<boolean>(false);
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const CheckStepValidity = (
    Index: onStepEnum,
    index: number,
    specificCongigId?: string | null,
  ) => {
    const ofIndex = index;
    const stepConfigurationId = specificCongigId || configureId;

    if (Index === onStepEnum.TEST && index !== 0) {
      return !!zapState.selectedItems[ofIndex].dataOut;
    }
    const currentStep =
      Index === onStepEnum.CONFIGURATION
        ? zapState.selectedItems[ofIndex]?.metadata?.optionConfiguration[
            stepConfigurationId
          ]?.configurationStep
        : zapState.selectedItems[ofIndex]?.metadata;
    if (!currentStep?.fields) {
      console.log("Field does not exist returnning");
      return false;
    }

    // Check if all required fields in the current step have values
    return currentStep.fields.every((field) => {
      if (field.required) {
        return field.fieldValue && field.fieldValue.trim() !== "";
      }
      return true;
    });
  };

  const checkPublishability = () => {
    let isPublishable = true;
    zapState.selectedItems.map((step, i) => {
      if (
        step.metadata?.fields[0].fieldValue ||
        zapState.selectedItems.length > 1
      ) {
        if (
          !(
            CheckStepValidity(
              onStepEnum.SETUP,
              i,
              step.metadata?.fields[0].fieldValue,
            ) &&
            CheckStepValidity(
              onStepEnum.CONFIGURATION,
              i,
              step.metadata?.fields[0].fieldValue,
            ) &&
            CheckStepValidity(
              onStepEnum.TEST,
              i,
              step.metadata?.fields[0].fieldValue,
            ) &&
            !!selectedRecordId
          )
        )
          isPublishable = false;
      } else {
        isPublishable = false;
      }
    });
    return isPublishable;
  };

  async function handlePublish() {
    setIsPublishing(true);
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/publish`,
      {
        triggerId: zapState.selectedItems[0].id,
        zapId: Number(zapId),
        userId: Number(user?.userId || 8),
        triggerConfiguration: zapState.selectedItems[0].metadata || {},
        actions: zapState.selectedItems.slice(1).map((item: ItemType) => ({
          actionId: item.id,
          stepId: item.stepId,
          configuration: item.metadata,
        })),
      },
      {
        withCredentials: true,
      },
    );
    if (response.data.zapId) {
      toast.custom((t) => (
        <ToastNotification
          t={t}
          type="success"
          actions={[]}
          onClose={() => toast.dismiss(t.id)}
        >
          <div className="flex gap-1 items-center">Zap has been published</div>
        </ToastNotification>
      ));
      setIsPublishing(false);
      setIsPublished(true);
    }
  }

  function handleGoToDashboard() {
    router.push(`/zap/dashboard`);
  }

  async function handleTest() {
    console.log("Testing the zap");
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_HOOK_URL}/api/v1/zap/test/run`,
        {
          zapId: Number(zapId),
        },
      );
      console.log(response);
      if (response.data.success) {
        toast.custom((t) => (
          <ToastNotification
            t={t}
            type="success"
            actions={[]}
            onClose={() => toast.dismiss(t.id)}
          >
            <div className="flex gap-1 items-center">Test run completed</div>
          </ToastNotification>
        ));
      } else {
        toast.custom((t) => (
          <ToastNotification
            t={t}
            type="error"
            actions={[]}
            onClose={() => toast.dismiss(t.id)}
          >
            <div className="flex gap-1 items-center">Test run failed</div>
          </ToastNotification>
        ));
      }
    } catch (error) {
      toast.custom((t) => (
        <ToastNotification
          t={t}
          type="error"
          actions={[]}
          onClose={() => toast.dismiss(t.id)}
        >
          <div className="flex gap-1 items-center">Test run failed</div>
        </ToastNotification>
      ));
    }
  }

  useEffect(() => {
    async function handleLoadZap() {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/zap/loadzap/${zapId}`,
          {
            withCredentials: true,
          },
        );
        if (response.data.unauthorized) {
          setUnauthorized(true);
          return;
        }
        setSelectedRecordId(response.data.RecordId);
        setRecords(response.data.records);
        setZapState((prev) => {
          let newZap = { ...prev };
          let newItems = { ...newZap.selectedItems };
          newItems = response.data.finalZap;
          newZap = { ...newZap, selectedItems: newItems };
          return newZap;
        });
        if (!user) {
          const session = await getSession();
          // @ts-ignore
          setUser(session?.user);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    handleLoadZap();
  }, []);
  return (
    <>
      {unauthorized && (
        <div className="fixed inset-0 bg-black/50 flex z-[1000] justify-center items-center p-4">
          <div className="flex flex-col gap-4 items-center bg-[#1f1f1f] rounded p-6 text-center">
            <div className="text-xl sm:text-2xl font-bold text-white">
              You are not authorized to access this zap
            </div>
            <div className="text-sm text-white">
              Please contact the owner of the zap to get access
            </div>
            <div className="flex flex-col sm:flex-row gap-2 mt-2">
              <CancelButton onClick={handleGoToDashboard}>
                Go To Dashboard
              </CancelButton>
            </div>
          </div>
        </div>
      )}

      {/* Top Action Bar */}
      <div className="flex flex-row w-full bg-[#FFFDF9] border-b border-zinc-200 justify-end items-center gap-2 px-4 py-0.5 sm:py-2">
        <ActionButton
          disabled={checkPublishability()}
          onClick={handleTest}
          className="w-full sm:w-auto"
        >
          <div className="flex items-center justify-center gap-2">
            {/* @ts-ignore */}
            <Play size={18} />
            Test Run
          </div>
        </ActionButton>
        <ActionButton
          disabled={checkPublishability()}
          onClick={handlePublish}
          className="w-full sm:w-auto"
        >
          Publish
        </ActionButton>
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full h-[calc(100vh-5.6rem)] overflow-auto bg-[rgb(249,247,243)] dot-background-alt p-4 sm:p-6">
        <MovableCells
          setIsFullScreen={setIsFullScreen}
          loading={loading}
          zapState={zapState}
          setZapState={setZapState}
        />

        {/* Side Modal */}
        {metaData.isOpen && (
          <div
            className={`fixed flex z-50 bg-transparent
    ${
      isFullScreen
        ? "top-0 left-0 w-screen h-screen justify-center items-center"
        : "right-2 mt-4 max-w-[35rem] min-h-[80%] max-h-[80%]"
    }`}
          >
            <Suspense fallback={<SideModalSkeleton />}>
              <SideModal
                metaData={metaData}
                setMetaData={setMetaData}
                CheckStepValidity={CheckStepValidity}
                handlePublish={handlePublish}
                isFullScreen={isFullScreen}
                setIsFullScreen={setIsFullScreen}
                setReRender={setReRender}
              />
            </Suspense>
          </div>
        )}
        {/* Loading Overlay */}
        {isPublishing && (
          <div className="fixed inset-0 bg-black/50 flex z-[1000] justify-center items-center p-4">
            <LoadingSpinner />
          </div>
        )}

        {/* Published Overlay */}
        {isPublished && (
          <div className="fixed inset-0 bg-black/50 flex z-[1000] justify-center items-center p-4">
            <div className="flex flex-col gap-4 items-center bg-[#1f1f1f] rounded p-6 text-center w-full max-w-sm">
              <div className="text-xl sm:text-2xl font-bold text-white">
                Zap has been published
              </div>
              <div className="text-sm text-white">
                You can now go to the dashboard to view your zap
              </div>
              <div className="flex flex-col sm:flex-row gap-2 mt-2">
                <CancelButton onClick={() => setIsPublished(false)}>
                  Stay
                </CancelButton>
                <SaveButton onClick={handleGoToDashboard} disabled={false}>
                  Go to Dashboard
                </SaveButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
