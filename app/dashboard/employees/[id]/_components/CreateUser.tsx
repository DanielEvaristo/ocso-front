"use client";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
  Image,
} from "@nextui-org/react";
import { ReactNode } from "react";
import { LuPencil, LuPlus } from "react-icons/lu";

export default function CreateEmployee({ children, photo }: { children: ReactNode, photo: string | undefined}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Image src={photo} onClick={onOpen} isZoomed
            className="object-cover"
            classNames={{img: "size-72"}}>
      </Image>
      <Modal
        className="bg-orange-400"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent className="w-full">
          {() => (
            <>
              <ModalBody>{children}</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
