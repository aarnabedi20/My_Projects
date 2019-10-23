.586
.model flat, stdcall
option casemap :none
.stack 4096
extrn ExitProcess@4: proc

GetStdHandle proto :dword
ReadConsoleA  proto :dword, :dword, :dword, :dword, :dword
WriteConsoleA proto :dword, :dword, :dword, :dword, :dword
MessageBoxA proto	:dword, :dword, :dword, :dword
STD_INPUT_HANDLE equ -10
STD_OUTPUT_HANDLE equ -11

.data
	
		bufSize = 80
 	 	inputHandle DWORD ?
 	    buffer db bufSize dup(?)
 	    bytes_read  DWORD  ?
		msg1 db "please enter the tempreture?"
		msg2 db "In which do you want to Convert? (C or F): ",0
		A_F db "The answer is (in F) ",0
		A_C db "The answer is (in C)", 0
 	 	outputHandle DWORD ?
		bytes_written dd ?
		actualNumber dw 0
		inNumber dw 0
		asciiBuf db 4 dup (" "),13,10,0
.code
	main:
		invoke GetStdHandle, STD_OUTPUT_HANDLE
 	    mov outputHandle, eax
		mov	eax,LENGTHOF msg2
		invoke WriteConsoleA, outputHandle, addr msg2, eax, addr bytes_written, 3

 	    invoke GetStdHandle, STD_INPUT_HANDLE
 	    mov inputHandle, eax
 		invoke ReadConsoleA, inputHandle, addr buffer, bufSize, addr bytes_read, 5
		sub bytes_read, 2	; -2 to remove cr,lf
 		mov ebx,0
	
		mov al, byte ptr buffer+[ebx] 
		add	[inNumber],ax

	cont:
		cmp inNumber, 43H
		je cent
		cmp inNumber, 46H
		je Fahren
		call ExitProcess@4

	cent: 
		call to_Centigrade
		call ExitProcess@4

	Fahren:
		Call to_Fahren
		call ExitProcess@4

to_Fahren Proc
		invoke GetStdHandle, STD_OUTPUT_HANDLE
 	    mov outputHandle, eax
		mov	eax,LENGTHOF msg1
		invoke WriteConsoleA, outputHandle, addr msg1, eax, addr bytes_written, 3

 	    invoke GetStdHandle, STD_INPUT_HANDLE
 	    mov inputHandle, eax
 		invoke ReadConsoleA, inputHandle, addr buffer, bufSize, addr bytes_read, 5
		sub bytes_read, 2			; -2 to remove cr,lf
 		mov ebx,0
		 

		mov al, byte ptr buffer+[ebx] 
		sub al,30h
		add	[actualNumber],ax

	getNext:
		inc	bx
		cmp ebx,bytes_read
		jz calF
		mov	ax,10
		Imul	[actualNumber]
		mov actualNumber,ax
		mov al, byte ptr buffer+[ebx] 
		sub	al,30h
		add actualNumber,ax
		
		jmp getNext
	calF:
		
		mov cx, actualNumber

		mov eax, ecx
		IMUL cx, 9
		mov ax, cx
		mov bx, 5
		IDIV bx
		add eax, 32

		mov ebx, eax
		mov cl, 10
		mov ebx, 3

	display:
		
		IDIV cl
		add ah, 30h
		mov byte ptr asciiBuf+[ebx], ah
		dec ebx
		mov ah, 0
		cmp al, 0
		ja display

		mov eax, 4

		invoke GetStdHandle, STD_OUTPUT_HANDLE
 	    mov outputHandle, eax
		mov	eax,LENGTHOF A_F;length of A_F
		invoke WriteConsoleA, outputHandle, addr A_F, eax, addr bytes_written, 0
		
		invoke GetStdHandle, STD_OUTPUT_HANDLE
 	    mov outputHandle, eax
		mov	eax,LENGTHOF asciiBuf
		invoke WriteConsoleA, outputHandle, addr asciiBuf, eax, addr bytes_written, 0
		
		push 0

		call ExitProcess@4

	to_Fahren ENDP

to_Centigrade PROC
		invoke GetStdHandle, STD_OUTPUT_HANDLE
 	    mov outputHandle, eax
		mov	eax,LENGTHOF msg1
		invoke WriteConsoleA, outputHandle, addr msg1, eax, addr bytes_written, 3

 	    invoke GetStdHandle, STD_INPUT_HANDLE
 	    mov inputHandle, eax
 		invoke ReadConsoleA, inputHandle, addr buffer, bufSize, addr bytes_read, 5
		sub bytes_read, 2			; -2 to remove cr,lf
 		mov ebx,0
		 

		mov al, byte ptr buffer+[ebx] 
		sub al,30h
		add	[actualNumber],ax

	getNext:
		inc	bx
		cmp ebx,bytes_read
		jz calC
		mov	ax,10
		mul	[actualNumber]
		mov actualNumber,ax
		mov al, byte ptr buffer+[ebx] 
		sub	al,30h
		add actualNumber,ax
		
		jmp getNext

	calC:
		
		mov cx, 0
		mov cx, actualNumber

		mov eax, ecx
		sub eax, 32
		mov cx, 5
		mul cx
		mov cx, 9
		div cx

		mov ebx, eax
		mov cl,10
		mov	ebx,3

	display:
		div	cl
		add	ah,30h
		mov byte ptr asciiBuf+[ebx],ah
		dec	ebx
		mov	ah,0
		cmp al,0
		ja display
		
		mov	eax,4

		invoke GetStdHandle, STD_OUTPUT_HANDLE
 	    mov outputHandle, eax
		mov	eax,LENGTHOF A_C	;length of A_F
		invoke WriteConsoleA, outputHandle, addr A_C, eax, addr bytes_written, 0
		
		invoke GetStdHandle, STD_OUTPUT_HANDLE
 	    mov outputHandle, eax
		mov	eax,LENGTHOF asciiBuf
		invoke WriteConsoleA, outputHandle, addr asciiBuf, eax, addr bytes_written, 0
		
		push 0

		call	ExitProcess@4
		to_Centigrade ENDP
end	main

end